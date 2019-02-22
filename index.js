const Alexa = require('ask-sdk-core');
const { HelpIntentHandler } = require('./handlers/HelpIntentHandler');
const { ErrorHandler } = require('./handlers/ErrorHandler');
const { ResetHandler } = require('./handlers/ResetHandler');
const { NegativeChoiceHandler } = require('./handlers/NegativeChoiceHandler');
const {
  LaunchRequestHandler,
  CancelAndStopIntentHandler,
  SessionEndedRequestHandler
} = require('./handlers/BaseHandlers');


exports.handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    LaunchRequestHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler,
    ResetHandler,
    NegativeChoiceHandler)
  .addErrorHandlers(ErrorHandler)
  .lambda();

