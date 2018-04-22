const express = require('express');
const builder = require('botbuilder');
const botbuilder_azure = require("botbuilder-azure");
const calling = require('botbuilder-calling');
const PORT = process.env.port || process.env.PORT || 3978
const app = express();

// api routes
app.use('/api', require('./api'));

// error logging
app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal Server Error.');
});

app.listen(PORT, () => console.log(`server started on ${PORT}!`));

// Make sure you add code to validate these fields
// var luisAppId = process.env.LuisAppId;
// var luisAPIKey = process.env.LuisAPIKey;
// var luisAPIHostName = process.env.LuisAPIHostName || 'westus.api.cognitive.microsoft.com';

// const LuisModelUrl = 'https://' + luisAPIHostName + '/luis/v2.0/apps/' + luisAppId + '?subscription-key=' + luisAPIKey;

// // Create a recognizer that gets intents from LUIS, and add it to the bot
// var recognizer = new builder.LuisRecognizer(LuisModelUrl);
// bot.recognizer(recognizer);

// Add a dialog for each intent that the LUIS app recognizes.
// See https://docs.microsoft.com/en-us/bot-framework/nodejs/bot-builder-nodejs-recognize-intent-luis
// bot.dialog('GreetingDialog',
//     (session) => {
//         session.send('You reached the Greeting intent. You said \'%s\'.', session.message.text);
//         session.endDialog();
//     }
// ).triggerAction({
//     matches: 'Greeting'
// })

// bot.dialog('HelpDialog',
//     (session) => {
//         session.send('You reached the Help intent. You said \'%s\'.', session.message.text);
//         session.endDialog();
//     }
// ).triggerAction({
//     matches: 'Help'
// })

// bot.dialog('CancelDialog',
//     (session) => {
//         session.send('You reached the Cancel intent. You said \'%s\'.', session.message.text);
//         session.endDialog();
//     }
// ).triggerAction({
//     matches: 'Cancel'
// })

