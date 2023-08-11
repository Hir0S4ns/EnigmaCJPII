const introContainer = document.getElementById('intro-container');
const startButton = document.getElementById('start-button');
const gameContainer = document.getElementById('game-container');
const phaseImage = document.getElementById('phase-image');
const logoImage = document.getElementById('logo-image'); // Element for the logo image
const answerInput = document.getElementById('answer-input');
const answerButton = document.getElementById('answer-button');
const congratulationsText = document.getElementById('congratulations-text'); // Element for congratulations text

const answers = [
  ["291"],
  ["quinta-feira", "Quinta-feira", "quinta", "Quinta"],
  ["pirâmide", "piramide", "Pirâmide"],
  ["ferro", "Ferro"], 
  ["video-game", "videogame", "Video-Game", "video game", "Video game", "Videogame"], 
  ["6"],
  ["antigo", "Antigo"], 
  ["musica", "música", "Música", "música"],
  ["agosto", "Agosto"], 
  ["3 patos", "3"],
  ["1889"],
  ["esquerda","Esquerda","left"],
  ["penútimo", "penultimo", "Penúltimo", "Penultimo"],
  ["arco-iris","arco íris","arco-íris","Arco-iris","Arco Íris","Arco-Íris"],
  ["7"],
  ["acabou","Acabou"],
];

const phaseImages = [
  "imagens/291.png",
  "imagens/quinta-feira.png",
  "imagens/piramide.png",
  "imagens/ferro.png",
  "imagens/video game.png",
  "imagens/6.png",
  "imagens/nokia.png",
  "imagens/musica.png",
  "imagens/agosto.png",
  "imagens/3patos.png",
  "imagens/sudoku fake.png",
  "imagens/esquerda.png",
  "imagens/penultimo.png",
  "imagens/arco-iris.png",
  "imagens/relógios.png",
  "imagens/epihau.png",
  "imagens/parabéns.png"
];

const logoImagePath = "imagens/logocjp.png"; // Path to the logo image

let currentPhase = 0;

startButton.addEventListener('click', () => {
  introContainer.style.display = 'none';
  gameContainer.style.display = 'block';
  loadPhase(currentPhase);
});

// ... (código anterior)

// ... (código anterior)

answerButton.addEventListener('click', () => {
  const userAnswer = answerInput.value.toLowerCase();
  const correctAnswers = answers[currentPhase];

  if (correctAnswers.includes(userAnswer)) {
    currentPhase++;
    if (currentPhase < phaseImages.length) {
      loadPhase(currentPhase);
      showCongratulations(); // Show congratulations text
    } else {
      showConclusionImage(); // Show conclusion image
    }
  } else {
    alert("Resposta incorreta! Você voltará para a fase 1.");
    currentPhase = 0;
    loadPhase(currentPhase);
    hideCongratulations(); // Hide congratulations text
  }

  answerInput.value = '';
});

// ... (código posterior)
;


function loadPhase(phaseIndex) {
  phaseImage.src = phaseImages[phaseIndex];
  logoImage.src = logoImagePath; // Update the logo image source for each phase

  gameContainer.classList.remove('last-phase'); // Remove a classe 'last-phase' para todas as fases
  if (phaseIndex === phaseImages.length - 1) {
    gameContainer.classList.add('last-phase'); // Adiciona a classe 'last-phase' apenas na última fase
  }

  // Verifica se é a fase 11 e adiciona a classe apropriada
  if (phaseIndex === 10) {
    phaseImage.classList.add('phase11');
  } else {
    phaseImage.classList.remove('phase11');
  }
}

// ... (código posterior)


const congratulationsTimeout = 3000; // 5 segundos

function showCongratulations() {
  congratulationsText.textContent = "Parabéns, você acertou! Espere pelo próximo enigma.";
  setTimeout(hideCongratulations, congratulationsTimeout);
}

function hideCongratulations() {
  congratulationsText.textContent = ""; // Limpar o texto da mensagem
}

function hideAnswerControls() {
  answerInput.style.display = 'none';
  answerButton.style.display = 'none';
}

function showConclusionImage() {
  const conclusionContainer = document.getElementById('conclusion-container');
  conclusionContainer.style.display = 'block';
}


