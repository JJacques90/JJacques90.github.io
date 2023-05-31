let tafels = [];

const setup = () => {
    let btnGo = document.getElementById("btnGo");
    btnGo.addEventListener("click", addTafel);
};

const addTafel= () =>{
    // ophalen ingegeven getal in txtStart
    let txtStartGetal = document.getElementById("txtStart");
    let startGetal = parseInt(txtStartGetal.value);
    if(isNaN(startGetal)){

        alert("Geen geldig getal");
    }
    else {
        // maak een tafel object aan met de correcte inhoud
        let tafel = {
            start: startGetal,
            datum: new Date()
        };
        // voeg het tafelobject toe aan tafels array
        tafels.push(tafel);
        // ga alle tafels opnieuw gaan renderen na toevoegen van de nieuwe
        // steeds volledige div met id "tafels" opnieuw gaan opbouwen
        showTafels();

        // maak txtStartGetal input field terug leeg
        txtStartGetal.value = "";
    }
};

const showTafels = () =>{
    // ophalen div met id="tafels", waar alle tafels in moeten getoond worden.
    let tafelsDiv = document.getElementById("tafels");
    // verwijder de inhoud van de tafels div zodat dit opnieuw een volledig lege div is zoals in de beginsituatie
     verwijderAlleChildren(tafelsDiv);

    // loop over de array van tafels
    for (let i = 0; i<tafels.length; i++) {
        // haal 1 tafel object op
        let tafel = tafels[i];
        // voor ieder tafel object in array tafels roepen we de functie createTafel aan
        // en die voegen we toe aan de tafels div
        tafelsDiv.appendChild(createTafel(tafel));
    }
};

// createTafel maakt een div aan met alle gegevens van 1 tafel
const createTafel = (tafel) =>{
    // maak eerst een div aan dat een volledige tafel zal bevatten
    let tafelDiv = document.createElement("div");
    // voeg er de header aan toe. De data die in de header moet worden getoond wordt meegegeven aan de functie

    tafelDiv.appendChild(createHeader(tafel));
    // voeg een css class toe aan de tafel div
    tafelDiv.setAttribute("class", "tafel");

    // Via onderstaande loop van 1 tot en met 10 voegen we alle producten van de tafel toe
    for(var i = 1; i<=10; i++){
        // maak voor ieder product een nieuwe div aan
        let row = document.createElement("div");

        // als i deelbaar is door 2, voeg dan een css-class "even" toe => zorgt voor grijze achtergrond
        if(i%2 == 0){
            row.setAttribute("class", "even");
        }

        // Voeg een textnode toe aan de row met de inhoud van die div. Vb.: "3 x 5 = 15"
        row.appendChild(document.createTextNode(tafel.start + " x " + i + " = " + tafel.start*i));
        // voeg uiteindelijk de div row met het product toe aan de tafel div
        tafelDiv.appendChild(row);
    }

    return tafelDiv;
};

// maak de header van een tafel div aan
const createHeader = (tafel) => {
    // maak een nieuwe div voor de header
    let headerDiv = document.createElement("div");
    // voeg een class toe aan de header div
    headerDiv.setAttribute("class", "header");

    let headerNode = document.createTextNode("Tafel van "
                                + tafel.start + " aangemaakt op: "
                                + tafel.datum.toTimeString().substring(0,8));
    // voeg de textnode toe aan de header div met de inhoud van de header
    headerDiv.appendChild(headerNode);
    return headerDiv;
};



// verwijder alle childs van een element
const verwijderAlleChildren = (element) => {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
};

window.addEventListener("load", setup);