const setup = () => {
    let btn = document.getElementById("btn");
    btn.addEventListener('click', verwerkTekst);
}

const verwerkTekst = () => {
    let txtInput = document.getElementById("txtInput").value;
    console.log(voegSpatiesToe(txtInput))
}

const voegSpatiesToe = txtInput => {
    let str = "";
    for(let i = 0; i < txtInput.length; i++){
        if(txtInput.charAt(i) === " ") {
            continue;
        }
        str += txtInput.charAt(i) + " ";
    }
    return str;
}

window.addEventListener("load", setup);