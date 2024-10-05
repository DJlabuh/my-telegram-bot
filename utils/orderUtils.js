const handleOrder = (bot, query, yourChatId) => {
  const chatId = query.message.chat.id;
  const productId = query.data.split("_")[1];

  let confirmationMessage = "";
  let productName = "";

  switch (productId) {
    case "1":
      confirmationMessage = "Ви замовили Мед гречаний. Дякуємо!";
      productName = "Мед гречаний";
      break;
    case "2":
      confirmationMessage = "Ви замовили Мед акацієвий. Дякуємо!";
      productName = "Мед акацієвий";
      break;
    case "3":
      confirmationMessage = "Ви замовили Прополіс. Дякуємо!";
      productName = "Прополіс";
      break;
    case "4":
      confirmationMessage = "Ви замовили Маточне молочко. Дякуємо!";
      productName = "Маточне молочко";
      break;
    default:
      confirmationMessage = "Цей продукт не знайдено. Спробуйте ще раз.";
  }

  bot.sendMessage(chatId, confirmationMessage);
  bot.sendMessage(
    yourChatId,
    `Нове замовлення:\nПродукт: ${productName}\nКористувач: ${query.from.first_name} ${query.from.last_name}`
  );
};

module.exports = { handleOrder };