const Alexa = require('ask-sdk-core');
const { HelpIntentHandler } = require('./handlers/HelpIntentHandler');
const { ErrorHandler } = require('./handlers/ErrorHandler');
const { ResetHandler } = require('./handlers/ResetHandler');
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
    ResetHandler)
  .addErrorHandlers(ErrorHandler)
  .lambda();

