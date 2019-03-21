function populateCard() {
  if (trivia.isEnded()) {
    displayScores();
  } else {

    // show question 
    var element = document.getElementById("cardtitle");
    element.innerHTML = trivia.getQuestionIndex().query;

    //show options 
    var options = trivia.getQuestionIndex().options;
    for (var i = 0; i < options.length; i++) {
      var element = document.getElementById("choice" + i);
      element.innerHTML = options[i];
      guess("btn" + i, options[i]);
    }
    displayProgress();
  }
};

function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function () {
    trivia.guess(guess);
    populateCard();
  }
};

function displayProgress () {
  var currentQuestionNumber = trivia.questionIndex + 1;
  var element = document.getElementById("questions");
  element.innerHTML = " Question " + currentQuestionNumber + " of " + trivia.questions.length;
}

function displayScores() {
  var gameOverPage = "<h1>Result</h1>";
  gameOverPage += "<h2 id='cardWrapper'>Your Score: " + trivia.score + "</h2>";
  var element = document.getElementById("cardWrapper")
  element.innerHTML = gameOverPage;
};

// Array of all the questions and options to populate the questions.
var questions = [
  new Question("What course below is NOT and Ironhack Bootcamp?", ["Web Development", "Data Analytics", "Machine Learning", "UX / UI Design"], "Machine Learning"),
  new Question("IronHack foundation year", ["2013", "1994", "2009", "2000"], "2013"),
  new Question("IronHack is present in ___ countries and ___ alumni (Ironhackers)", ["15 / +900", "05 / +3,000", "08 / +2,000", "03 / +500"], "08 / +2,000"),
  new Question("Ironhack Headquarters:", ["Berlin", "Madrid", "Paris", "Amsterdam"], "Madrid"),
  new Question("This was a previous/temporary Ironhack campus in Sao Paulo-SP", ["Oficina Coworking", "Google Campus", "2WORK", "WeWork"], "WeWork")
];

var trivia = new Trivia(questions);