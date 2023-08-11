const introContainer = document.getElementById('intro-container');
const startButton = document.getElementById('start-button');
const gameContainer = document.getElementById('game-container');
const phaseImage = document.getElementById('phase-image');
const logoImage = document.getElementById('logo-image'); // Element for the logo image
const answerInput = document.getElementById('answer-input');
const answerButton = document.getElementById('answer-button');

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
    ["esquerda","Esquerda"],
    ["peúntimo", "penultimo", "Penúltimo", "Penultimo"]
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
    "imagens/penultimo",
];

const logoImagePath = "imagens/logocjp.png"; // Path to the logo image

let currentPhase = 0;

startButton.addEventListener('click', () => {
  introContainer.style.display = 'none';
  gameContainer.style.display = 'block';
  loadPhase(currentPhase);
});

answerButton.addEventListener('click', () => {
  const userAnswer = answerInput.value.toLowerCase();
  const correctAnswers = answers[currentPhase];

  if (correctAnswers.includes(userAnswer)) {
    currentPhase++;
    if (currentPhase < phaseImages.length) {
      loadPhase(currentPhase);
    } else {
      // Você pode exibir uma mensagem de conclusão ou fazer algo aqui
    }
  } else {
    alert("Resposta incorreta! Você voltará para a fase 1.");
    currentPhase = 0;
    loadPhase(currentPhase);
  }

  answerInput.value = '';
});

function loadPhase(phaseIndex) {
  phaseImage.src = phaseImages[phaseIndex];
  logoImage.src = logoImagePath; // Update the logo image source for each phase

  // Verifica se é a fase 11 e adiciona a classe apropriada
  if (phaseIndex === 10) {
    phaseImage.classList.add('phase11');
  } else {
    phaseImage.classList.remove('phase11');
  }
}
