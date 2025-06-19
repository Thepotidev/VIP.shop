const jumbotronMessages = [
    "Sorpréndete con Nuestros Precios en Marcas Exclusivas.",
    "Importamos el Lujo a Precios que no Creerás. ¡Explora la Colección!",
    "Tu Oportunidad de Comprar Marcas Top con Descuentos.",
    "Marcas Globales Directo a tu Puerta.",
    "Descubre los beneficios exclusivos y hazte miembro AHORA. ¡No te lo Pierdas!",
    "¿Listo para tu Próxima Joya?"
];
// const jumbotronEmojis = ["🛍️", "✨", "🎁", "💎", "🔥"]; Agregar Emojis

let jIndex = 0;
const jText = document.getElementById("jumbotron-slider-text");
// const jEmojis = document.querySelectorAll(".jumbotron-slider .jumbotron-emoji"); Agregar Emojis

setInterval(() => {
    jIndex = (jIndex + 1) % jumbotronMessages.length;
    jText.textContent = jumbotronMessages[jIndex];
    // jEmojis.forEach(e => e.textContent = jumbotronEmojis[jIndex % jumbotronEmojis.length]);
}, 2500);