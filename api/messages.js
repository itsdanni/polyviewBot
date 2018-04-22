const router = require('express').Router();
const builder = require('botbuilder');
var tableName = 'botdata';
var azureTableClient = new botbuilder_azure.AzureTableClient(tableName, process.env['AzureWebJobsStorage']);
var tableStorage = new botbuilder_azure.AzureBotStorage({ gzipData: false }, azureTableClient);
// Create chat connector for communicating with the Bot Framework Service
const chatConnector = new builder.ChatConnector({
  appId: process.env.MicrosoftAppId,
  appPassword: process.env.MicrosoftAppPassword,
  openIdMetadata: process.env.BotOpenIdMetadata
});

const bot = new builder.UniversalBot(chatConnector, function (session, args) {
  session.send('You reached the default message handler. You said \'%s\'.', session.message.text);
});
// Add root dialog
bot.dialog('/', function (session) {
  session.send('Watson... come here!');
});
bot.set('storage', tableStorage);

router.post('/', (req, res, next) => {
  chatConnector.listen()
})

module.exports = router
