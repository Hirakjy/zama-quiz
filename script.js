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

const quizContainer = document.getElementById("quiz-container");
const nextBtn = document.getElementById("next-btn");
const scoreDisplay = document.getElementById("score");

function loadQuiz() {
  const q = quizData[current];
  quizContainer.innerHTML = `
    <h2>${q.question}</h2>
    ${q.options.map(opt => `
      <label><input type="radio" name="answer" value="${opt}"> ${opt}</label><br>
    `).join('')}
  `;
}

nextBtn.addEventListener("click", () => {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (!selected) return alert("Please choose one answer!");

  if (selected.value === quizData[current].answer) score++;
  current++;

  if (current < quizData.length) {
    loadQuiz();
  } else {
    quizContainer.innerHTML = `<h2>🎉 You scored ${score}/${quizData.length}</h2>`;
    nextBtn.style.display = "none";
  }
});

loadQuiz();
