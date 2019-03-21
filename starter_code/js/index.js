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

// 

function removeComponent() {
  var gameNode = document.getElementById('game-node');
  gameNode.removeChild(gameNode.childNodes[1]);
}

function addComponent() {
  var cardNode = document.getElementById('game-node');
  var addSession = '<section id="cardWrapper"> \
  <div class="container bg"> \
    <div class="card" style="width: 36rem;"> \
      <div class="card-body "> \
        <h4 id="cardtitle">Ironhack Trivia</h4> \
        <hr> \
        <h5 id="questions"></h5> \
        <h5 id="score">Select one option:</h5> \
        <div> \
          <div class="row"> \
            <div class="col"> \
              <button id="btn0" type="button" class="btn btn-outline-primary btn-lg btn-block"><span id="choice0"></span></button> \
            </div> \
            <div class="col"> \
              <button id="btn1" type="button" class="btn btn-outline-primary btn-lg btn-block"><span id="choice1"></span></button> \
            </div> \
            <div class="w-100"></div> \
            <br> \
            <div class="col"> \
              <button id="btn2" type="button" class="btn btn-outline-primary btn-lg btn-block"><span id="choice2"></span></button> \
            </div> \
            <div class="col"> \
              <button id="btn3" type="button" class="btn btn-outline-primary btn-lg btn-block"><span id="choice3"></span></button> \
            </div> \
          </div> \
        </div> \
      </div> \
    </div> \
  </div> \
</section>';
  cardNode.innerHTML = addSession;

  populateCard();

}

function playMusic() {
  document.getElementById('my_audio').play();
};

  var btnStartOne = document.getElementById("myBtn");
  btnStartOne.addEventListener('click', function () {
    removeComponent();
    addComponent();
    playMusic();
  })
