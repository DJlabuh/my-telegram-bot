require('dotenv').config();

module.exports = {
  token: process.env.TELEGRAM_TOKEN,  // Токен бота з .env файлу
  yourChatId: process.env.CHAT_ID,    // ID чату з .env файлу
};