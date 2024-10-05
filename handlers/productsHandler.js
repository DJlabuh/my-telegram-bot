module.exports = (bot, msg) => {
  const chatId = msg.chat.id;
  const productsMessage = `🛒 Наші продукти:

	1.	Мед гречаний
	2.	Мед акацієвий
	3.	Прополіс
	4.	Маточне молочко`;

  const options = {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "Мед гречаний", callback_data: "order_1" },
          { text: "Мед акацієвий", callback_data: "order_2" },
        ],
        [
          { text: "Прополіс", callback_data: "order_3" },
          { text: "Маточне молочко", callback_data: "order_4" },
        ],
        [{ text: "🔙 Повернутися в меню", callback_data: "menu" }],
      ],
    },
  };

  bot.sendMessage(chatId, productsMessage, options);
};