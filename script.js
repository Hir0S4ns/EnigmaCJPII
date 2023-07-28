// Array com as respostas corretas de cada fase
const answers = ["xandão", "fake", "natty", "fim"];

// Array com os caminhos das imagens para cada fase
const imagePaths = ["images/xandão.jpg", "images/faker.jpeg", "images/naatty.jpg"];

// Variável para controlar a fase atual
let currentPhase = 0;

// Função para atualizar a imagem da fase
function updatePhaseImage() {
    const phaseImage = document.getElementById("phaseImage");
    phaseImage.src = imagePaths[currentPhase];
    phaseImage.alt = "Fase " + (currentPhase + 1);
}

// Função para verificar a resposta
function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.toLowerCase().trim();

    if (userAnswer === answers[currentPhase]) {
        // Resposta correta, vamos avançar para a próxima fase
        currentPhase++;

        if (currentPhase === answers.length) {
            // Fim do enigma
            document.getElementById("feedback").innerText = "Parabéns, você completou o enigma!";
            document.getElementById("answer").disabled = true;
        } else {
            // Próxima fase
            document.getElementById("feedback").innerText = "Resposta correta! Avance para a próxima fase.";
            document.getElementById("answer").value = "";
            updatePhaseImage();
        }
    } else {
        // Resposta incorreta
        document.getElementById("feedback").innerText = "Resposta incorreta, tente novamente.";
    }
}

// Atualiza a imagem da fase inicial ao carregar a página
updatePhaseImage();
