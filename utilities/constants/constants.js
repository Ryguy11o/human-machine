const Dialog = {
  intro: 'Hello, welcome to our training! My name is Alexa. Nice to meet you!'
};


const dialog_arr = [
  'Could you please tell me what’s your name?',
  'That’s a cool name! Can I introduce myself?',
  'Okay! I was born in California and I was trained to help people with public speaking. How are you doing today?',
  'Ok! So... you know, this is a training about public speaking, right?',
  'Let me give you a brief introduction to the process we will go through, okay?',
  'Awesome! Now, the first thing we will do is help you understand more about your fear in communications. Okay?',
  'Alright, my friend! So... fear of public speaking is normal, and it affects three out of four Americans. Do you know that?',
  'Well, strong fear can change how you behave in the everyday life. Let’s work together to overcome it. Are you ready?',
  'Perfect! Let me see… Umm… when it comes to public speaking, you may be disturbed by negative thoughts. For example, I think things like, “I am going to embarrass myself in front of humans”. Do you feel the same?',
  'I can relate to you. But you know what, the difference between being someone who is fearful, and someone who can communicate, is being aware of your fears. Ok?',
  'Excellent! Let’s move on to trying to overcome our fears together. Are you with me？',
  'Great, my buddy! Well… the most effective way to overcome communication apprehension is practice, practice and practice. okay?',
  'Alright! Now you are about to give a one-minute speech about whether professors should use clickers during the class, let’s prepare for it together. Ok?',
  'Great! First, I would like to hear whether you like clickers or not. Do you like clickers?',
  'Gotcha! You know what? You have come up with your main point! The next question is, why do you think so?',
  'Thank you for sharing your thoughts! Now, could you give me an example to support your main point, such as your personal experience with clickers?',
  'Your classmates will definitely get your point if you use some examples! Okay?',
  'Next, to keep your audience on track, umm… you can use one sentence to summarize your point. Please go ahead and try it!',
  'Great, I knew you could speak well! What do you think about your speech so far?',
  'Okay, now, imagine that you are going to deliver the speech to your class. You stand up and get onto the stage. okay?',
  'Now all of your classmates and your instructor focus their attention on you. The class is very quiet, waiting for you to speak up. How do you feel?',
  'I know it sounds scary. Umm, everyone experienced some level of anxiety and fear in public speaking, right?',
  'Now, back to that scenario, when you stand on the stage, are there any negative thoughts haunting in your mind?'
]; 
//length = 23

const NEGATIVE_CHOICE_DIALOGS = {
  //I feel people are judging me
  1: [
      'Hey buddy, no worries. You don’t need to read the audience’s minds. okay?',
      'For a speech, it is way more important to express your own thoughts and feelings. So, try repeating this sentence, “I am going to say what I want to say”.',
      'Excellent! Then, forget about other’s judgment; you are going to say what you want to say!'
    ],
  //Everybody is watching me. I never speak well.
  2: [
    'I know, you may feel that your face is burning when everyone is watching you. Correct?',
    'And it is often awkward, right?',
    'But you should believe in yourself. please repeat the sentence, “This is awkward, but I can handle it."',
    'Excellent! Awkward social situations are not big deals. Trust me, you can handle it well!'
  ],
  //What I say will probably sound stupid.
  3: ['Hey buddy, no worries. For a public speech, there is no absolute right or wrong in terms of what you say. Okay?',
      'You know, your opinions are always valued. And what do you have to lose when you stand there and begin to talk about your opinions?',
      'So please talk to yourself, “There’s nothing to lose. It’s worth a try.”',
      'Excellent! Sometimes things will get better if you speak up, so try it!'
  ],
  //I’m a loser compared to my classmates.
  4: ['No. Hey buddy, please don’t think like that. Your classmates are just a group of students like you, okay?',
      'And everyone can make mistakes, even your instructor. Try saying to yourself, "I can do it as well as everyone else does."',
      'Excellent! Trust me, speak up and you can do it well!'
  ],
  //They must think I am dumb if I don’t do it well.
  5: ['Hey buddy, no worries. Now think about it… even if you fail the speech, does it mean that you will fail this class?',
      'No... Does it mean that you will be laughed at by anyone?',
      'You know, none of these will happen....  So, please say to yourself, “Even if things don\'t go well, it\'s not that bad at all."',
      'Excellent! Even if things don’t go well, it\'s no catastrophe, but it will be a good opportunity to learn!'
  ] 
}

const FINAL_DIALOG = [
  'I knew you would do a great job, my friend! How do you feel right now?',
  'Alright! I’m happy to see you’re improving now. Thank you for sharing your feeling with me. Is it helpful?',
  'Then, please practice your one-minute speech about clickers. And remember what you just learned! You will do great.'
]

module.exports = {
  Dialog,
  dialog_arr,
  NEGATIVE_CHOICE_DIALOGS,
  FINAL_DIALOG,
  APP_ID: 'amzn1.ask.skill.da7cf341-dfba-4d06-b8d5-78c0723d9c5d',
  WELCOME_MESSAGE: Dialog.intro,
  SKILL_NAME: 'Human Machine Skill',
  HELP_MESSAGE: 'This skill is for research purposes only, please say reset to restart the conversation',
  HELP_REPROMPT: 'What can I help you with?',
  STOP_MESSAGE: 'Goodbye!'
};
