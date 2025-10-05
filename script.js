// ========================
// Zama Quiz Campaign 1
// Latest 10 Questions Only
// ========================

document.addEventListener("DOMContentLoaded", () => {

  const quizData = [
    {
      question: "1️⃣ What new season did Zama recently launch for its creator program?",
      options: ["A. Season 1", "B. Season 2", "C. Season 3", "D. Season 4"],
      answer: 2
    },
    {
      question: "2️⃣ Which new content type has been added in Zama Creator Program Season 3?",
      options: [
        "A. Podcast episodes",
        "B. Video content",
        "C. Audio-only lectures",
        "D. Interactive quizzes"
      ],
      answer: 1
    },
    {
      question: "3️⃣ What did Zama explicitly warn against in one of its X posts?",
      options: [
        "A. Expecting high gas fees",
        "B. That they plan to launch a token soon",
        "C. That they are not planning to launch a blockchain or token anytime soon",
        "D. That FHE is insecure"
      ],
      answer: 2
    },
    {
      question: "4️⃣ How much is the total monthly prize pool for Zama Creator Program Season 3?",
      options: ["A. $10,000", "B. $25,000", "C. $56,000", "D. $100,000"],
      answer: 2
    },
    {
      question: "5️⃣ Which achievement regarding TFHE did Zama’s team announce recently?",
      options: [
        "A. TFHE bootstraps in under 5 ms",
        "B. TFHE bootstraps in under 10 ms",
        "C. TFHE bootstraps in less than 1 ms",
        "D. TFHE bootstraps in 50 ms"
      ],
      answer: 2
    },
    {
      question: "6️⃣ Which company technology is Zama mainly improving for privacy?",
      options: [
        "A. Fully Homomorphic Encryption (FHE)",
        "B. Blockchain scalability",
        "C. Decentralized wallets",
        "D. Smart contracts"
      ],
      answer: 0
    },
    {
      question: "7️⃣ What programming language is mainly used in Zama’s FHE libraries?",
      options: ["A. Python", "B. Rust", "C. Go", "D. JavaScript"],
      answer: 1
    },
    {
      question: "8️⃣ What is Concrete ML in Zama’s ecosystem?",
      options: [
        "A. A machine learning framework using FHE",
        "B. A blockchain explorer",
        "C. A decentralized wallet",
        "D. A token trading platform"
      ],
      answer: 0
    },
    {
      question: "9️⃣ How does TFHE improve computation?",
      options: [
        "A. Faster bootstrapping under 1ms",
        "B. Reduces gas fees",
        "C. Improves network decentralization",
        "D. Enhances UI experience"
      ],
      answer: 0
    },
    {
      question: "🔟 Which platform can use Zama’s TFHE directly?",
      options: [
        "A. Any AI model or smart contract",
        "B. Only blockchain nodes",
        "C. Only web browsers",
        "D. Only cloud servers"
      ],
      answer: 0
    }
  ];

  let currentQuestion = 0;
  let score = 0;
  let results = [];

  const quiz = document.getElementById("quiz");
  const nextBtn = document.getElementById("next-btn");
  const scoreContainer = document.getElementById("score-container");

  // ========================
  // Load current question
  // ========================
  function loadQuestion() {
    const q = quizData[currentQuestion];
    quiz.innerHTML = `
      <div class="question">${q.question}</div>
      <div class="options">
        ${q.options.map((opt, i) => `<div class="option" onclick="selectOption(${i})">${opt}</div>`).join("")}
      </div>
    `;
  }

  // ========================
  // Select an option
  // ========================
  window.selectOption = function(i) {
    const correct = quizData[currentQuestion].answer;
    const options = document.querySelectorAll(".option");

    options.forEach((opt, index) => {
      opt.style.pointerEvents = "none"; // prevent multiple clicks
      if (index === correct) opt.style.backgroundColor = "#d9f99d"; // ✅ green
      else if (index === i) opt.style.backgroundColor = "#fecaca"; // ❌ red
    });

    if (i === correct) {
      score++;
      results.push({ qNo: currentQuestion + 1, correct: true });
    } else {
      results.push({ qNo: currentQuestion + 1, correct: false });
    }
  };

  // ========================
  // Go to next question
  // ========================
  window.nextQuestion = function() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showScore();
    }
  };

  // ========================
  // Show final score and share button
  // ========================
  function showScore() {
    quiz.style.display = "none";
    nextBtn.style.display = "none";

    let details = results
      .map(r => `${r.qNo}. ${r.correct ? "✅ Correct" : "❌ Wrong"}`)
      .join("<br>");

    scoreContainer.innerHTML = `
      <div><b>Your Final Score: ${score}/${quizData.length}</b></div>
      <br>
      <div>${details}</div>
      <br>
      <button class="button" id="share-x" onclick="shareOnX()">📤 Share on X</button>
    `;
    scoreContainer.style.display = "block";
  }

  // ========================
  // Share score on X (Twitter)
  // ========================
  window.shareOnX = function() {
    const text = `🎯 I recently completed the Zama quiz and scored ${score}/${quizData.length}! It was a great opportunity to learn more about Zama and explore its innovative ecosystem. @zama_fhe Join Zama quiz https://hirakjy.github.io/zama-quiz/`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  // ========================
  // Initialize first question
  // ========================
  loadQuestion();

});
