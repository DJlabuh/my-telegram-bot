module.exports = (bot, msg) => {
  const chatId = msg.chat.id;
  const helpMessage = `🤖 Опис бота

Я ваш помічник у світі натуральних продуктів бджільництва.🐝
Тут ви можете дізнатися про наші продукти та зробити замовлення.

📋 Доступні команди:

	•	/start - Почати взаємодію з ботом.
	•	/products - Переглянути доступні продукти.
	•	/help - Отримати допомогу.

📞 Контактна інформація:
• Телефон: +38 063 898 79 75
• Сайт: https://pasikaoleksu.com.ua
• Електронна пошта: pasika.oleksu@gmail.com
`;

  bot.sendMessage(chatId, helpMessage);
};