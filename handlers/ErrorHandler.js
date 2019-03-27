const { dialog_arr, NEGATIVE_CHOICE_DIALOGS, FINAL_DIALOG } = require('../utilities/constants/constants');

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

function getUserChoice(db){
  return new Promise((resolve, reject) => {
    let ref = db.ref("negative_choice");
    ref.once("value", function(snapshot) {
      resolve(snapshot.val());
    });
  });
}

const ErrorHandler = {
    canHandle(handlerInput) {
      return true;
    },
    async handle(handlerInput, error) {
      console.log(handlerInput.requestEnvelope.request);
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
      let speechText;
      //if initial dialog hasnt been finished continue with it
      if(!(current_index > dialog_arr.length - 1)){
        speechText = dialog_arr[current_index];
      } else {
      //get the user's choice dialog if the initial dialog is complete\
        const user_choice = await getUserChoice(db);
        const choice_dialog_arr = NEGATIVE_CHOICE_DIALOGS[user_choice];
        const choice_index = current_index - dialog_arr.length;
        //This step is important because when a user makes a choice 1-5 the first response of the array will have
        //already been returned.
        const adjusted_choice_index = choice_index + 1;
        if(!(adjusted_choice_index >= choice_dialog_arr.length)){
          speechText = choice_dialog_arr[adjusted_choice_index];
        } else {
          console.log('true');
          const FINAL_DIALOGUE_INDEX = current_index - (dialog_arr.length + choice_dialog_arr.length - 1);
          console.log(FINAL_DIALOGUE_INDEX);
          speechText = FINAL_DIALOG[FINAL_DIALOGUE_INDEX];
        }
      }
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
