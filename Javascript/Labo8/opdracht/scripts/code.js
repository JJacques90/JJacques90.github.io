const setup = () => {
    let verjaardag = new Date(2023, 0, 17, 0,0,0,0);
    let vandaag = new Date();
    console.log(verjaardag);
    console.log(vandaag);
    console.log(Math.floor((vandaag - verjaardag) / 1000 / 60 / 60 / 24));
}
window.addEventListener("load", setup);