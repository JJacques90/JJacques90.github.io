const setup = () => {
    // trigrams();
    // deEnHet();
    formwaarden();
}

const trigrams = () => {
    let s = "onoorbaar";
    for(let i = 0; i < s.length - 2; i++){
        console.log(s.slice(i, i+3));
    }
}

const deEnHet = () => {
    // let s = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let s = "de man riep de"
    console.log("Beginwaarde: " + s);
    while(s.indexOf("de") !== -1){
        let start = s.slice(0, s.indexOf("de"));
        let end = s.slice(s.indexOf("de") + 2, s.length);
        s = start + "het" + end;
    }
    console.log("Eindresultaat: " + s);
}

const formwaarden = () => {
    let roker = document.getElementById("roker");
    let radios = document.getElementsByName("moedertaal");
    let buurland = document.getElementById("buurland");
    let bestelling = document.getElementById("bestelling");

    document.getElementById("btn").addEventListener("click", () => {
        let s = "";

        // roker
        s += roker.checked ? "is een roker\n" : "is geen roker\n";

        // moedertaal
        for(let i = 0; i < radios.length; i++){
            if(radios[i].checked){
                let taal = "";
                switch (radios[i].id){
                    case "nl":
                        taal = "Nederlands";
                        break;
                    case "fr":
                        taal = "Frans";
                        break;
                    case "en":
                        taal = "Engels"
                        break;
                    default: console.log("Er ging iets mis");
                }
                s += `moedertaal is ${taal}\n`
            }
        }

        // buurland
        s += `favoriete buurland is ${buurland.options[buurland.options.selectedIndex].text}\n`;

        // bestelling
        s += "bestelling bestaat uit "
        let selected = [];
        for(let i = 0; i < bestelling.options.length; i++){
            if(bestelling.options[i].selected){
                selected.push(bestelling.options[i].text);
            }
        }
        for(let i = 0; i < selected.length; i++){
            s += selected[i] + " "
        }

        // Log de tekst
        console.log(s.trim());
    })
}

window.addEventListener("load", setup);