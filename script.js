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

// Charger les témoignages dynamiquement et ajouter une animation de défilement
fetch('testimonials.json')
    .then(response => response.json())
    .then(data => {
        let container = document.getElementById('testimonials-container');
        data.forEach(testimonial => {
            let div = document.createElement('div');
            div.classList.add('testimonial-item');
            div.innerHTML = `<em>"${testimonial.review}"</em> - ${testimonial.name}`;
            container.appendChild(div);
        });

        // Ajout d'une animation de défilement automatique
        let index = 0;
        function cycleTestimonials() {
            const items = document.querySelectorAll('.testimonial-item');
            items.forEach(item => item.style.display = 'none');
            items[index].style.display = 'block';
            index = (index + 1) % items.length;
        }
        setInterval(cycleTestimonials, 5000); // Change toutes les 5 secondes
        cycleTestimonials(); // Premier affichage
    });
