const sliderMessages = [
    "Bienvenidos al club",
    "Envios sin costo adicional",
    "Recibalo hoy mismo",
    "¡Accede a lo inalcanzable!",
    "Pruebelo sin riesgo"
];
const emojis = ["💎","🤩", "😲", "😎", "🔥"];

let current = 0;
const textElement = document.getElementById("slider-text");
const emojiElements = document.querySelectorAll(".slider-one .emoji-surprise");

setInterval(() => {
    current = (current + 1) % sliderMessages.length;
    textElement.textContent = sliderMessages[current];
    // Cambia los emojis también si quieres
    emojiElements.forEach(e => e.textContent = emojis[current % emojis.length]);
}, 2500);