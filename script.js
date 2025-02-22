function generateText() {
    document.getElementById("generated-text").innerText = "🚀 Texte généré : 'Découvrez notre solution ultime pour booster vos ventes !'";
}

document.addEventListener("mouseleave", function(event) {
    if (event.clientY < 10) {
        document.getElementById("exitPopup").classList.add("show");
    }
});

function closePopup() {
    document.getElementById("exitPopup").classList.remove("show");
}
