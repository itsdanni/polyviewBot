const router = require('express').Router();
const calling = require('botbuilder-calling');
const builder = require('botbuilder');

const callConnector = new calling.CallConnector({
  callbackUrl: 'https://localhost:3978/api/calls',
  appId: '49e1a163-72ac-4d6e-8c1d-9477be96de2c',
  appPassword: 'c;s87jZz39:Q!=g['
});
const bot = new calling.UniversalCallBot(callConnector);

router.post('/', (req, res, next) => {
  callConnector.listen()
})

// Add root dialog
bot.dialog('/', function (session) {
  session.send('Watson... come here!');
});

bot.dialog('askName', [
  function (session) {
      builder.Prompts.text(session, 'Hi! What is your name?');
  },
  function (session, results) {
      session.endDialogWithResult(results);
  }
]);
//var inMemoryStorage = new builder.MemoryBotStorage();

// This is a dinner reservation bot that uses a waterfall technique to prompt users for input.
// var bot = new builder.UniversalBot(connector, [
//     function (session) {
//         session.send("Welcome to the dinner reservation.");
//         builder.Prompts.time(session, "Please provide a reservation date and time (e.g.: June 6th at 5pm)");
//     },
//     function (session, results) {
//         session.dialogData.reservationDate = builder.EntityRecognizer.resolveTime([results.response]);
//         builder.Prompts.number(session, "How many people are in your party?");
//     },
//     function (session, results) {
//         session.dialogData.partySize = results.response;
//         builder.Prompts.text(session, "Whose name will this reservation be under?");
//     },
//     function (session, results) {
//         session.dialogData.reservationName = results.response;

//         // Process request and display reservation details
//         session.send(`Reservation confirmed. Reservation details: <br/>Date/Time: ${session.dialogData.reservationDate} <br/>Party size: ${session.dialogData.partySize} <br/>Reservation name: ${session.dialogData.reservationName}`);
//         session.endDialog();
//     }
// ]).set('storage', inMemoryStorage); // Register in-memory storage
module.exports = router

