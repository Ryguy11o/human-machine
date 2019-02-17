function resetIndexValue(db){
  return new Promise((resolve, reject) => {
    let ref = db.ref("current_sentence");
    ref.set(0).then(() => {resolve()});
  });
}

const ResetHandler = {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'reset'
    },
    async handle(handlerInput) {

      let firebase = require("firebase-admin");
      let serviceAccount = require("../firebase-auth.json");
      if(!firebase.apps.length){
        firebase.initializeApp({
          credential: firebase.credential.cert(serviceAccount),
          databaseURL: "https://human-alexa-skill.firebaseio.com/"
        });
      }
      let db = firebase.database();

      await resetIndexValue(db);
      await firebase.app().delete();
      let speechText = 'Okay, the conversation counter has been reset';
      return handlerInput.responseBuilder
        .speak(speechText)
        .withShouldEndSession(true)
        .getResponse();
    }
  };

module.exports = {
    ResetHandler
}
