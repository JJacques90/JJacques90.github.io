const setup = () => {
    // trigrams();
    deEnHet();
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

window.addEventListener("load", setup);