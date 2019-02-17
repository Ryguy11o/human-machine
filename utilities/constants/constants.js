const Dialog = {
  intro: 'Hello, welcome to our training! My name is Alexa. Nice to meet you!'
};


const dialog_arr = ['Could you please tell me what’s your name?',
'That’s a cool name! Can I introduce myself?',
'Okay! I was born in California and I was trained to help people with public speaking. How are you doing today?',
'Ok! So... you know, this is a training about public speaking, right?',
'Let me give you a brief introduction to the process we will go through, okay?']



module.exports = {
  Dialog,
  dialog_arr,
  APP_ID: 'amzn1.ask.skill.da7cf341-dfba-4d06-b8d5-78c0723d9c5d',
  WELCOME_MESSAGE: Dialog.intro,
  SKILL_NAME: 'Human Machine Skill',
  HELP_MESSAGE: 'You can ask me questions about Penn State and the State College area! Currently I support questions about the current academic year, and questions about the CATA bus system.  Or you can say exit.  How may I help you?',
  HELP_REPROMPT: 'What can I help you with?',
  STOP_MESSAGE: 'Goodbye!'
};
