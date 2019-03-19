// CONSTRUCTOR FUNCTION (QUESTIONS) //
function Question(query, options, answer) {
  this.query = query;
  this.options = options;
  this.answer = answer;
}

// Correct Answer 
Question.prototype.rightAnswer = function (choice) {
  return choice === this.answer;
}

// CONSTRUCTOR FUNCTION (TRIVIA) //
function Trivia(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}

// Question Index
Trivia.prototype.getQuestionIndex = function () {
  return this.questions[this.questionIndex];
}

// Is End
Trivia.prototype.isEnded = function () {
  return this.questions.length === this.questionIndex;
}

// Score
Trivia.prototype.guess = function (answer) {
  if (this.getQuestionIndex().rightAnswer(answer)) {
    this.score++;
  }
  this.questionIndex++;
}