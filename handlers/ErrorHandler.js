const { dialog_arr } = require('../utilities/constants/constants');

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
    let ref = db.ref("current_sentence");
    ref.set(index + 1).then(() => {resolve()});
  });
}

const ErrorHandler = {
    canHandle() {
      return true;
    },
    async handle(handlerInput, error) {

      let firebase = require("firebase-admin");
      let serviceAccount = require("../firebase-auth.json");
      if(!firebase.apps.length){
        firebase.initializeApp({
          credential: firebase.credential.cert(serviceAccount),
          databaseURL: "https://human-alexa-skill.firebaseio.com/"
        });
      }
      let db = firebase.database();

      const current_index = await getIndexValue(db);
      const speechText = dialog_arr[current_index];
      await setIndexValue(current_index, db);
      await firebase.app().delete();
      return handlerInput.responseBuilder
        .speak(speechText)
        .withShouldEndSession(false)
        .getResponse();
    }
  };

module.exports = {
    ErrorHandler
}
