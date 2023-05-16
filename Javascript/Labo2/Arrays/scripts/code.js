const setup = () => {
    // Oefening 1
    let familieLeden = ['Francky', 'Sandra', 'Veronique', 'Boris', 'Lou'];
    console.log(familieLeden.length);
    console.log(familieLeden[0]);
    console.log(familieLeden[2]);
    console.log(familieLeden[4]);
    const extraNaam = prompt('Geef een naam in van een familielid: ');
    const voegNaamToe = extraNaam => familieLeden.push(extraNaam);
    voegNaamToe(extraNaam);
    console.log(familieLeden);
}
window.addEventListener("load", setup);