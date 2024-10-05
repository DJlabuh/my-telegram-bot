const { handleOrder } = require("../utils/orderUtils");
const { yourChatId } = require("../config");

module.exports = (bot, query) => {
  handleOrder(bot, query, yourChatId);
};