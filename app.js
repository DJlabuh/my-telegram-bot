const TelegramBot = require("node-telegram-bot-api");
const { token } = require("./config");
const startHandler = require('./handlers/startHandler');
const productsHandler = require('./handlers/productsHandler');
const helpHandler = require('./handlers/helpHandler');
const callbackQueryHandler = require('./handlers/callbackQueryHandler');

const bot = new TelegramBot(token, { polling: true });

// Команди
bot.onText(/\/start/, (msg) => startHandler(bot, msg));
bot.onText(/\/products/, (msg) => productsHandler(bot, msg));
bot.onText(/\/help/, (msg) => helpHandler(bot, msg));

// Callback запити
bot.on("callback_query", (query) => callbackQueryHandler(bot, query));

console.log("Бот запущений!");