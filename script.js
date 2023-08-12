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
  ["pirâmide", "piramide", "Pirâmide","Piramide"],
  ["ferro", "Ferro"], 
  ["video-game", "videogame", "Video-Game", "video game", "Video game", "Videogame"], 
  ["6","seis"],
  ["antigo", "Antigo"], 
  ["musica", "música", "Música", "música","music"],
  ["agosto", "Agosto"], 
  ["3 patos", "3","3 pato","3patos","três patos","três"],
  ["1889"],
  ["esquerda","Esquerda","left"],
  ["penúltimo", "penultimo", "Penúltimo", "Penultimo"],
  ["arco-iris","arco íris","arco-íris","Arco-iris","Arco Íris","Arco-Íris"],
  ["7"],
  ["acabou","Acabou"],
];

const phaseImages = [
  "imagens/fase 1.png",
  "imagens/fase 2.png",
  "imagens/fase 3.png",
  "imagens/fase 4.png",
  "imagens/fase 5.png",
  "imagens/bobo.png",
  "imagens/fase 7.png",
  "imagens/fase 8.png",
  "imagens/fase 9.png",
  "imagens/fase 10.png",
  "imagens/fase 11.png",
  "imagens/fase 12.png",
  "imagens/fase 13.png",
  "imagens/fase 14.png",
  "imagens/fase 15.png",
  "imagens/fase 16.png",
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


