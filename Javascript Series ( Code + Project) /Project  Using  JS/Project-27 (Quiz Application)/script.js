document.addEventListener("DOMContentLoaded", () => {
  
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");
  const scoreDisplay = document.getElementById("score");
  const resultContainer = document.getElementById("result-container");
  const choicesList = document.getElementById("choices-list");
  const questionText = document.getElementById("question-text");
  const questionContainer = document.getElementById("question-container");

  const questions = [
    {
      question: "What does HTML stand for?",
      choices: [
        "HyperText Markup Language",
        "HighText Machine Language",
        "Hyperlink and Text Markup Language",
        "Home Tool Markup Language",
      ],
      answer: "HyperText Markup Language",
    },
    {
      question:
        "Which programming language is primarily used for building Android apps?",
      choices: ["Swift", "Java", "Kotlin", "C#"],
      answer: "Kotlin",
    },
    {
      question: "What does CPU stand for in computing?",
      choices: [
        "Central Processing Unit",
        "Computer Personal Unit",
        "Central Performance Utility",
        "Core Processing Unit",
      ],
      answer: "Central Processing Unit",
    },
    {
      question: "Which company created Windows OS?",
      choices: ["Apple", "Microsoft", "Google", "IBM"],
      answer: "Microsoft",
    },
    {
      question: "What does RAM stand for?",
      choices: [
        "Random Access Memory",
        "Read-Only Memory",
        "Rapid Application Manager",
        "Remote Access Module",
      ],
      answer: "Random Access Memory",
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  startBtn.addEventListener('click',startQuiz);

  function startQuiz() {
    startBtn.classList.add("hidden");
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestions();
  }

  function showQuestions() {
    nextBtn.classList.add("hidden");
    questionText.textContent = questions[currentQuestionIndex].question;
    choicesList.innerHTML = "";
    questions[currentQuestionIndex].choices.forEach((choice)=>{
        const li = document.createElement('li');
        li.innerText = choice;
        choicesList.appendChild(li);
        li.addEventListener("click", (e) => selectAnswer(e,choice));
    })
  }

  function selectAnswer(e,choice){
    const option = Array.from(e.target.parentElement.children);
    option.forEach((option) => (option.classList.remove("selected")))
    e.target.classList.add("selected");
    const correctAnswer = questions[currentQuestionIndex].answer;
    if(choice === correctAnswer){
        score++;
    }
    nextBtn.classList.remove("hidden");
}

    nextBtn.addEventListener('click',()=>{
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
            showQuestions();
        }else{
            showResult();
        }
    });

    function showResult(){
        questionContainer.classList.add("hidden");
        resultContainer.classList.remove("hidden");
        scoreDisplay.textContent = `${score} out of ${questions.length}`;
    }

    restartBtn.addEventListener('click',()=>{
        score = 0;
        currentQuestionIndex = 0;
        choicesList.innerHTML = "";
        questionText.innerHTML = "";
        resultContainer.classList.add("hidden");
        startBtn.classList.add("hidden");
        startQuiz();
    })
});
