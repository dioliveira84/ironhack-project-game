// CONSTRUCTOR FUNCTION (QUESTIONS) //

function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

// Correct Answer 
Question.prototype.correctAnswer = function (choice) {
  return choice === this.answer;
}

// CONSTRUCTOR FUNCTION (TRIVIA) //

function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}

// Question Index
Quiz.prototype.getQuestionIndex = function () {
  return this.questions[this.questionIndex];
}

// Is End
Quiz.prototype.isEnded = function () {
  return this.questions.length === this.questionIndex;
}

// Score
Quiz.prototype.guess = function (answer) {
  this.questionIndex++;
  if (this.getQuestionIndex().correctAnswer(answer)) {
    this.score++;
  }
}