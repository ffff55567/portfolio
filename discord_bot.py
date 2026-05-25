import discord
from discord.ext import commands
from datetime import datetime
import os
from dotenv import load_dotenv

# Загружаем токен из .env файла
load_dotenv()
TOKEN = os.getenv("DISCORD_TOKEN")

# Создаем бота с необходимыми правами
intents = discord.Intents.default()
intents.message_content = True
intents.members = True

bot = commands.Bot(command_prefix="!", intents=intents)

# Словарь для хранения последних сообщений со статусом игроков
status_messages = {}

@bot.event
async def on_ready():
    print(f"✅ Бот {bot.user} подключен!")
    print(f"📊 Бот подключен к {len(bot.guilds)} серверу(ам)")

@bot.command(name="create_status")
async def create_status_channel(ctx):
    """Создает канал и начинает отслеживать онлайн игроков"""
    
    try:
        # Создаем канал
        guild = ctx.guild
        channel = await guild.create_text_channel(f"онлайн-игроки-{datetime.now().strftime('%H-%M')}")
        
        # Отправляем первое сообщение
        embed = discord.Embed(
            title="🎮 Онлайн игроки",
            description="Список подключенных игроков обновляется автоматически",
            color=discord.Color.green()
        )
        
        message = await channel.send(embed=embed)
        status_messages[guild.id] = {"channel": channel, "message": message}
        
        await ctx.send(f"✅ Канал {channel.mention} создан!")
    except Exception as e:
        await ctx.send(f"❌ Ошибка при создании канала: {e}")

@bot.event
async def on_member_update(before, after):
    """Обновляет сообщение когда игрок появляется/исчезает онлайн"""
    
    if before.status == after.status:
        return
    
    guild = after.guild
    if guild.id not in status_messages:
        return
    
    # Получаем данные сообщения
    data = status_messages[guild.id]
    message = data["message"]
    
    # Считаем онлайн членов
    online_count = sum(1 for member in guild.members 
                      if member.status != discord.Status.offline)
    
    # Получаем список онлайн игроков
    online_members = [member.mention for member in guild.members 
                     if member.status != discord.Status.offline]
    
    # Создаем обновленный embed
    embed = discord.Embed(
        title="🎮 Онлайн игроки",
        description=f"**Всего онлайн: {online_count}**",
        color=discord.Color.green()
    )
    
    if online_members:
        embed.add_field(
            name="Активные игроки",
            value="\n".join(online_members),
            inline=False
        )
    else:
        embed.add_field(
            name="Активные игроки",
            value="Нет онлайн игроков",
            inline=False
        )
    
    embed.timestamp = datetime.now()
    
    # РЕДАКТИРУЕМ сообщение вместо создания нового
    try:
        await message.edit(embed=embed)
        print(f"✏️ Сообщение обновлено: {online_count} онлайн")
    except discord.NotFound:
        print("⚠️ Сообщение удалено, создаю новое")
        new_message = await data["channel"].send(embed=embed)
        status_messages[guild.id]["message"] = new_message

@bot.command(name="status")
async def check_status(ctx):
    """Проверяет текущий статус онлайн игроков"""
    guild = ctx.guild
    online_count = sum(1 for member in guild.members 
                      if member.status != discord.Status.offline)
    
    embed = discord.Embed(
        title="📊 Статус сервера",
        description=f"Онлайн: **{online_count}** / {guild.member_count}",
        color=discord.Color.blue()
    )
    await ctx.send(embed=embed)

# Запускаем бота
if __name__ == "__main__":
    bot.run(TOKEN)
