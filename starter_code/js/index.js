// CONSTRUCTOR FUNCTION (QUESTIONS) //

function Question(quiz, choices, answer) {
  this.quiz = quiz;
  this.choices = choices;
  this.answer = answer;
}

// Correct Answer 
Question.prototype.correctAnswer = function (choices) {
  return choice === this.answer;
}

// CONSTRUCTOR FUNCTION (TRIVIA) //

function Trivia(questions) {
  this.score = 0;
  this.indexOfQuestion = 0;
  this.questions = questions;
}

// Question Index
Trivia.prototype.getQuestionIndex = function () {
  return this.questions[this.indexOfQuestion];
}

// Is End
Trivia.prototype.isEnd = function () {
  return this.questions.length === this.indexOfQuestion;
}

// Score
Trivia.prototype.guess = function (answer) {
  this.indexOfQuestion++;
  if (this.indexOfQuestion().correctAnswer(answer)) {
    this.score++;
  }
}