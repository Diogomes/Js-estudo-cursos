const questions = [
  {
    question: "Who is known as the 'Mother of Dragons'?",
    choices: ["Cersei Lannister", "Arya Stark", "Daenerys Targaryen", "Sansa Stark"],
    answer: "Daenerys Targaryen"
  },
  {
    question: "What is the name of Jon Snow's direwolf?",
    choices: ["Ghost", "Nymeria", "Summer", "Shaggydog"],
    answer: "Ghost"
  },
  {
    question: "Which house has a sigil of a lion?",
    choices: ["House Stark", "House Lannister", "House Targaryen", "House Tyrell"],
    answer: "House Lannister"
  },
  {
    question: "Who becomes King of the Six Kingdoms at the end of the series?",
    choices: ["Jon Snow", "Tyrion Lannister", "Bran Stark", "Daenerys Targaryen"],
    answer: "Bran Stark"
  },
  {
    question: "What is the ancestral home of House Stark?",
    choices: ["Winterfell", "King's Landing", "The Eyrie", "Highgarden"],
    answer: "Winterfell"
  },
  // ... continue this structure up to 200 questions
];

const questionElement = document.getElementById("question");
const choiceElements = Array.from(document.getElementsByClassName("choice"));
const nextButton = document.getElementById("next");
const scoreElement = document.getElementById("score");
const wrongElement = document.getElementById("wrong");

let currentQuestion = 0;
let score = 0;
let wrong = 0;
let answerChosen = false;

function loadQuestion() {
  const currentQuestionData = questions[currentQuestion];
  questionElement.innerText = currentQuestionData.question;

  const choices = shuffleArray(currentQuestionData.choices);
  for (let i = 0; i < choiceElements.length; i++) {
    choiceElements[i].innerText = choices[i];
  }
  answerChosen = false;
}

function checkAnswer(e) {
  if (answerChosen) return;
  answerChosen = true;

  if (e.target.innerText === questions[currentQuestion].answer) {
    score++;
    scoreElement.innerText = "Score: " + score;
    e.target.classList.add("correct");
  } else {
    wrong++;
    wrongElement.innerText = "Wrong: " + wrong;
    e.target.classList.add("wrong");
    choiceElements.forEach((btn) => {
      if (btn.innerText === questions[currentQuestion].answer) {
        btn.classList.add("correct");
      }
    });
  }
}

choiceElements.forEach((element) => {
  element.addEventListener("click", checkAnswer);
});

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  wrong = 0;
  scoreElement.innerText = "Score: 0";
  wrongElement.innerText = "Wrong: 0";
  loadQuestion();
}

nextButton.addEventListener("click", () => {
  if (!answerChosen) {
    alert("Please select an answer before proceeding.");
    return;
  }

  currentQuestion++;

  choiceElements.forEach((btn) => btn.classList.remove("correct", "wrong"));

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    alert(
      "Quiz Over! You answered " + score + " out of " + questions.length + " correctly."
    );
    restartQuiz();
  }
});

function shuffleArray(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

loadQuestion();