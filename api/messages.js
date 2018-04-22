const router = require('express').Router();
const builder = require('botbuilder');
var tableName = 'botdata';
// Create chat connector for communicating with the Bot Framework Service
const chatConnector = new builder.ChatConnector({
  appId: process.env.MicrosoftAppId,
  appPassword: process.env.MicrosoftAppPassword,
  openIdMetadata: process.env.BotOpenIdMetadata
});

const bot = new builder.UniversalBot(chatConnector, function (session, args) {
  session.send('You reached the default message handler. You said \'%s\'.', session.message.text);
});

bot.dialog('askName', [
  function (session) {
      builder.Prompts.text(session, 'Hi! What is your name?');
  },
  function (session, results) {
      session.endDialogWithResult(results);
  }
]);

router.post('/', (req, res, next) => {
  chatConnector.listen()
})

module.exports = router
