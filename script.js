const quizData = [
  {
    question: "Which tool does Zama offer for machine learning on encrypted data?",
    options: ["Concrete ML", "TFHE-rs", "FHE-Py", "ZamaCore"],
    answer: "Concrete ML"
  },
  {
    question: "What milestone did Zama recently achieve?",
    options: ["TFHE bootstrap <1ms", "Launch of token", "New blockchain", "NFT drop"],
    answer: "TFHE bootstrap <1ms"
  },
  {
    question: "What is Zama’s Confidential Blockchain Protocol used for?",
    options: ["Confidential smart contracts", "Identity verification", "Payments", "AI training"],
    answer: "Confidential smart contracts"
  },
  {
    question: "How much is Zama Creator Program Season 3 prize pool?",
    options: ["$10,000", "$25,000", "$56,000", "$100,000"],
    answer: "$56,000"
  },
  {
    question: "Which partner works with Zama for confidential smart contracts?",
    options: ["OpenZeppelin", "Chainlink", "Hyperledger", "ConsenSys"],
    answer: "OpenZeppelin"
  }
];

let current = 0;
let score = 0;
let userAnswers = [];

const quizContainer = document.getElementById("quiz-container");
const nextBtn = document.getElementById("next-btn");
const scoreDisplay = document.getElementById("score");

function loadQuiz() {
  const q = quizData[current];
  quizContainer.innerHTML = `
    <h2>Q${current + 1}. ${q.question}</h2>
    ${q.options.map((opt, i) => `
      <label><input type="radio" name="answer" value="${opt}">
      ${String.fromCharCode(65 + i)}. ${opt}</label>
    `).join('')}
  `;
}

nextBtn.addEventListener("click", () => {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (!selected) return alert("Please select an answer!");

  const answerValue = selected.value;
  userAnswers.push(answerValue);

  if (answerValue === quizData[current].answer) score++;
  current++;

  if (current < quizData.length) {
    loadQuiz();
  } else {
    showResults();
  }
});

function showResults() {
  quizContainer.innerHTML = `<h2>🎉 You scored ${score}/${quizData.length}</h2>`;

  const resultDiv = document.createElement("div");
  resultDiv.classList.add("result-list");

  quizData.forEach((q, index) => {
    const isCorrect = userAnswers[index] === q.answer;
    const symbol = isCorrect ? "✅" : "❌";
    const resultItem = document.createElement("div");
    resultItem.classList.add("result-item", isCorrect ? "correct" : "wrong");
    resultItem.innerHTML = `
      <span>Q${index + 1}. ${q.question}</span>
      <span>${symbol}</span>
    `;
    resultDiv.appendChild(resultItem);
  });

  quizContainer.appendChild(resultDiv);
  nextBtn.style.display = "none";
  scoreDisplay.textContent = "Thanks for playing the Zama Quiz Campaign 1!";
}

loadQuiz();
