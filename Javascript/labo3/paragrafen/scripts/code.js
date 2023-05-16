const setup = () => {
    let paragrafen = document.getElementsByTagName("p");
    for(let i = 0; i < paragrafen.length; i++) {
        if(i%2 !== 0) {
            paragrafen[i].classList.add("opvallend");
        }
    }
}
window.addEventListener("load", setup);