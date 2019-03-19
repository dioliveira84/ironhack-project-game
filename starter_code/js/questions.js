function populate() {
  if (quiz.isEnded()) {
    // showScores();
  } else {
    // show question 
    var element = document.getElementById("cardtitle");
    element.innerHTML = quiz.getQuestionIndex().text;

    //show choices 
    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.lenght; i++) {
      var element = document.getElementById("choice"+i);
      element.innerHTML = choices[i];
    }
  }
}


// Array of all the questions and choices to populate the questions.
var questions = [
  new Question("What course below is NOT and Ironhack Bootcamp?", ["Web Development", "Data Analytics", "Machine Learning", "UX / UI Design"], "Machine Learning"),
  new Question("IronHack foundation year", ["2013", "1994", "2009", "2000"], "2013"),
  new Question("IronHack is present in ___ countries and ___ alumni (Ironhackers)", ["15 / +900", "05 / +3,000", "08 / +2,000", "03 / +500"], "08 / +2,000"),
  new Question("Ironhack Headquarters:", ["Berlin", "Madrid", "Paris", "Amsterdam"], "Madrid"),
  new Question("This was a previous/temporary Ironhack campus in Sao Paulo-SP", ["Oficina Coworking", "Google Campus", "2WORK", "WeWork"], "WeWork")
];

var quiz = new Quiz(questions);

populate();