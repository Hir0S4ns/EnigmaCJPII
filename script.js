const answers = ["pirâmide","video-game","antigo", "quinta-feira", "ferro", "musica", "agosto", "3 patos"];

var phaseImages = [
    "imagens/piramide.png",
    "imagens/video game.png",
    "imagens/nokia.png",
    "imagens/quinta-feira.png",
    "imagens/tiberio claudio cesar - ferro.png",
    "imagens/musica.png",
    "imagens/agosto.png",
    "imagens/3patos.png"


];

var currentPhase = 0;

function changePhaseImage() {
    if (currentPhase < phaseImages.length) {
        var imageElement = document.getElementById("phaseImage");
        imageElement.src = phaseImages[currentPhase];
    }
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.toLowerCase().trim();

    if (userAnswer === answers[currentPhase]) {
        currentPhase++;

        if (currentPhase === answers.length) {
            document.getElementById("feedback").innerText = "Parabéns, você completou o enigma!";
            document.getElementById("answer").disabled = true;
        } else {
            document.getElementById("feedback").innerText = "Resposta correta! Avance para a próxima fase.";
            document.getElementById("answer").value = "";
            changePhaseImage();
        }
    } else {
        document.getElementById("feedback").innerText = "Resposta incorreta, tente novamente.";
    }
}

// Inicializar a imagem da primeira fase
changePhaseImage();
// ... (código anterior)

function changePhaseImage() {
    if (currentPhase < phaseImages.length) {
        var imageElement = document.getElementById("phaseImage");
        imageElement.src = phaseImages[currentPhase];

        // Mostrar ou esconder o texto introdutório
        var introText = document.getElementById("introText");
        if (currentPhase === 0) {
            introText.style.display = "block"; // Mostrar na primeira fase
        } else {
            introText.style.display = "none"; // Esconder nas próximas fases
        }
    }
}

// ... (código posterior)
