module.exports = (bot, msg) => {
  const chatId = msg.chat.id;
  const welcomeMessage =
    'Привіт! Я бот ресурсу "Пасіка Олекси". Виберіть опцію в меню нижче:';

  const options = {
    reply_markup: {
      keyboard: [[{ text: "/products" }, { text: "/help" }]],
      resize_keyboard: true,
      one_time_keyboard: true,
    },
  };

  bot.sendMessage(chatId, welcomeMessage, options);
};