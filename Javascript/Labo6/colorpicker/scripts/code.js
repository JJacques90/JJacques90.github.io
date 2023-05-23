const setup = () => {
    // Get elements
    let sliders = document.getElementsByClassName("slider");
    for(let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", changeColor);
        sliders[i].addEventListener("input", changeColor);
    }
    changeColor();
}

const changeColor = () => {
    let red = document.getElementById("slider_red").value;
    let green = document.getElementById("slider_green").value;
    let blue = document.getElementById("slider_blue").value;

    document.getElementById("red").innerHTML = red;
    document.getElementById("green").innerHTML = green;
    document.getElementById("blue").innerHTML = blue;

    let swatch = document.getElementById("swatch");
    swatch.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
}
window.addEventListener("load", setup);