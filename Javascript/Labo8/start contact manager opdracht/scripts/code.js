let personen = [];
let currentPerson = undefined;

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();

    let errors = document.getElementsByClassName("invalid");

    // indien ok, bewaar de ingegeven data.
    if(errors.length === 0) {
        // een nieuw aangemaakte persoon voegen we toe
        let persoon = {};
        if(currentPerson === undefined) {
            editPersoon(persoon);

            persoon.id = personen.length;
            personen.push(persoon);

            voegToeUI(persoon);
        } else {
            let aanTePassenPersoon = personen[currentPerson.id]
            editPersoon(aanTePassenPersoon);
            let opt = document.getElementById(currentPerson.id);
            setUIHeading(opt, aanTePassenPersoon);
        }
    }
};

const editPersoon = (persoon) => {
    persoon.voornaam = document.getElementById("txtVoornaam").value;
    persoon.familienaam = document.getElementById("txtFamilienaam").value;
    persoon.geboortedatum = new Date(document.getElementById("txtGeboorteDatum").value);
    persoon.email = document.getElementById("txtEmail").value;
    persoon.kinderen = document.getElementById("txtAantalKinderen").value;
}

const voegToeUI = (persoon) => {
    let opt = document.createElement('option');
    opt.value = persoon.voornaam;
    opt.setAttribute("id", `${personen.length - 1}`);
    opt.dataset.id = `${personen.length - 1}`;
    setUIHeading(opt, persoon);
    let lijst = document.getElementById('lstPersonen');
    lijst.appendChild(opt);
}

const setUIHeading = (opt, persoon) => {
    opt.innerHTML = `${persoon.voornaam} ${persoon.familienaam}`;
}

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
    document.getElementById('txtVoornaam').value = "";
    document.getElementById('txtFamilienaam').value = "";
    document.getElementById('txtGeboorteDatum').value = "";
    document.getElementById('txtEmail').value = "";
    document.getElementById('txtAantalKinderen').value = "";
};

const toonPersoon = (e) => {
    if(e.target.tagName.toLowerCase() !== "option") {
        return;
    }
    let persoon = personen[e.target.dataset.id];
    currentPerson = persoon;
    document.getElementById('txtVoornaam').value = persoon.voornaam;
    document.getElementById('txtFamilienaam').value = persoon.familienaam;
    document.getElementById('txtGeboorteDatum').value = persoon.geboortedatum.toISOString().split('T')[0];
    document.getElementById('txtEmail').value = persoon.email;
    document.getElementById('txtAantalKinderen').value = persoon.kinderen;
}

// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
    lstPersonen.addEventListener("click", toonPersoon);
};

window.addEventListener("load", setup);