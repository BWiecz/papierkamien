let wynikCzlowiek = 0;
let wynikKomputer = 0;

function przycisk(czlowiek) {
    // Usuń stare komunikaty
    const stareNaglowki = document.querySelectorAll('h2, h3');
    stareNaglowki.forEach(el => el.remove());

    let a = Math.floor(Math.random() * 3);
    const h2 = document.createElement('h2');

    // Logika gry
    if (
        (czlowiek === "📃Papier📃" && a === 2) ||
        (czlowiek === "✂️Nożyce✂️" && a === 1) ||
        (czlowiek === "🗿Kamień🗿" && a === 0)
    ) {
        h2.textContent = "Przegrałeś!";
        wynikKomputer++;
    } else if (
        (czlowiek === "📃Papier📃" && a === 1) ||
        (czlowiek === "✂️Nożyce✂️" && a === 0) ||
        (czlowiek === "🗿Kamień🗿" && a === 2)
    ) {
        h2.textContent = "Wygrałeś!";
        wynikCzlowiek++;
    } else {
        h2.textContent = "Remis!";
    }

    document.body.appendChild(h2);

    const h3 = document.createElement('h3');
    if (a === 0) h3.textContent = 'Komputer wybrał: 📃Papier📃';
    if (a === 1) h3.textContent = 'Komputer wybrał: 🗿Kamień🗿';
    if (a === 2) h3.textContent = 'Komputer wybrał: ✂️Nożyce✂️';
    document.body.appendChild(h3);


    document.getElementById("wyniki").textContent = `Twój wynik: ${wynikCzlowiek} | Komputer: ${wynikKomputer}`;
}

function resetuj() {
    const stareNaglowki = document.querySelectorAll('h2, h3');
    stareNaglowki.forEach(el => el.remove());
}
