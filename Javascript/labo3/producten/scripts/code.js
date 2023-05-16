const setup = () => {
    let button = document.getElementById("submit");
    button.addEventListener("click", herbereken);
}

const herbereken = () => {
    let prijzen = document.getElementsByClassName("prijs");
    let aantallen = document.getElementsByClassName("aantal");
    let btwTarieven = document.getElementsByClassName("btw");
    let subtotalen = document.getElementsByClassName("subtotaal");
    let totaalVeld = document.getElementById("totaal");
    let totaalBedrag = 0;

    for(let i = 0; i < prijzen.length; i++) {
        let prijs = parseInt(prijzen[i].textContent, 10);
        let aantal = parseInt(aantallen[i].value, 10);
        let btw = parseInt(btwTarieven[i].textContent, 10);
        let subtotaal = (prijs * aantal) * ((btw  / 100) + 1);

        subtotalen[i].textContent = `${subtotaal.toFixed(2).toString()} EUR`;
        totaalBedrag += subtotaal;
    }
    totaalVeld.textContent = `${totaalBedrag.toFixed(2).toString()} EUR`;
}

window.addEventListener("load", setup);