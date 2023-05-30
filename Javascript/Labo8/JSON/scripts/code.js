const setup = () => {
    let obj = {
        voornaam:   "Jeffrey",
        achternaam: "Jacques",
        hobbies:    ["Programmeren", "Gamen", "Muziek"],
        geboortedatum:  new Date("1990-01-17"),
        partner:    {
            voornaam:   "Sanne",
            achternaam: "Stieperaere",
            geboortedatum: new Date("1986-02-18")
        }
    };
    let JSONString = JSON.stringify(obj);
    console.log(JSONString);

    let jsonToObj = JSON.parse(JSONString);
    console.log(jsonToObj.partner.voornaam);
}
window.addEventListener("load", setup);