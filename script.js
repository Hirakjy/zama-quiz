// ========================
// Zama Quiz Campaign 1
// Latest 10 Questions in Radio-Button Style
// ========================

const quizData = [
  {
    question: "Which new season did Zama recently launch for its creator program?",
    options: ["Season 1", "Season 2", "Season 3", "Season 4"],
    answer: "Season 3"
  },
  {
    question: "Which new content type has been added in Zama Creator Program Season 3?",
    options: ["Podcast episodes", "Video content", "Audio-only lectures", "Interactive quizzes"],
    answer: "Video content"
  },
  {
    question: "What did Zama explicitly warn against in one of its X posts?",
    options: [
      "Expecting high gas fees",
      "That they plan to launch a token soon",
      "That they are not planning to launch a blockchain or token anytime soon",
      "That FHE is insecure"
    ],
    answer: "That they are not planning to launch a blockchain or token anytime soon"
  },
  {
    question: "How much is the total monthly prize pool for Zama Creator Program Season 3?",
    options: ["$10,000", "$25,000", "$56,000", "$100,000"],
    answer: "$56,000"
  },
  {
    question: "Which achievement regarding TFHE did Zama’s team announce recently?",
    options: [
      "TFHE bootstraps in under 5 ms",
      "TFHE bootstraps in under 10 ms",
      "TFHE bootstraps in less than 1 ms",
      "TFHE bootstraps in 50 ms"
    ],
    answer: "TFHE bootstraps in less than 1 ms"
  },
  {
    question: "Which company technology is Zama mainly improving for privacy?",
    options: [
      "Fully Homomorphic Encryption (FHE)",
      "Blockchain scalability",
      "Decentralized wallets",
      "Smart contracts"
    ],
    answer: "Fully Homomorphic Encryption (FHE)"
  },
  {
    question: "What programming language is mainly used in Zama’s FHE libraries?",
    options: ["Python", "Rust", "Go", "JavaScript"],
    answer: "Rust"
  },
  {
    question: "What is Concrete ML in Zama’s ecosystem?",
    options: [
      "A machine learning framework using FHE",
      "A blockchain explorer",
      "A decentralized wallet",
      "A token trading platform"
    ],
    answer: "A machine learning framework using FHE"
  },
  {
    question: "How does TFHE improve computation?",
    options: [
      "Faster bootstrapping under 1ms",
      "Reduces gas fees",
      "Improves network decentralization",
      "Enhances UI experience"
    ],
    answer: "Faster bootstrapping under 1ms"
  },
  {
    question: "Which platform can use Zama’s TFHE directly?",
    options: [
      "Any AI model or smart contract",
      "Only blockchain nodes",
      "Only web browsers",
      "Only cloud servers"
    ],
    answer: "Any AI model or smart contract"
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
    <h2><b>Q${current + 1}. ${q.question}</b></h2>
    ${q.options.map((opt, i) => `
      <label style="display:block; margin:8px 0;">
        <input type="radio" name="answer" value="${opt}">
        ${String.fromCharCode(65 + i)}. ${opt}
      </label>
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

  // Add Share on X button
  const shareBtn = document.createElement("button");
  shareBtn.textContent = "📤 Share on X";
  shareBtn.style.marginTop = "20px";
  shareBtn.onclick = () => {
    const text = `🎯 I recently completed the Zama quiz and scored ${score}/${quizData.length}! It was a great opportunity to learn more about Zama and explore its innovative ecosystem. @zama_fhe Join Zama quiz https://hirakjy.github.io/zama-quiz/`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };
  quizContainer.appendChild(shareBtn);
}

loadQuiz();
