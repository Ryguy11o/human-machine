const { dialog_arr, NEGATIVE_CHOICE_DIALOGS } = require('../utilities/constants/constants');

function getIndexValue(db){
  return new Promise((resolve, reject) => {
    let ref = db.ref("current_sentence");
    ref.once("value", function(snapshot) {
      resolve(snapshot.val());
    });
  });
}

function setIndexValue(index, db){
  return new Promise((resolve, reject) => {
    let ref = db.ref("negative_choice");
    ref.set(index).then(() => {resolve()});
  });
}

const NegativeChoiceHandler = {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'NegativeChoice';
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

      const user_choice = parseInt(handlerInput.requestEnvelope.request.intent.slots.NUMBER.value);
      await setIndexValue(user_choice, db);
      const choice_dialog_arr = NEGATIVE_CHOICE_DIALOGS[user_choice];
      const speechText = choice_dialog_arr[0];
      await firebase.app().delete();
      return handlerInput.responseBuilder
        .speak(speechText)
        .withShouldEndSession(false)
        .getResponse();
    }
  };

module.exports = {
  NegativeChoiceHandler
}
