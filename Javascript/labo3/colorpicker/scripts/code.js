const setup = () => {
    // Get elements
    let sliderRed = document.getElementById("slider_red");
    let sliderGreen = document.getElementById("slider_green");
    let sliderBlue = document.getElementById("slider_blue");
    let colorBox = document.getElementsByClassName("colorbox")[0];

    // Set color tag to correct value
    document.getElementById("red").innerHTML = sliderRed.value;
    document.getElementById("green").innerHTML = sliderGreen.value;
    document.getElementById("blue").innerHTML = sliderBlue.value;

    // Fill box with init color
    colorBox.style.backgroundColor = 'rgb(' + sliderRed.value + ',' + sliderGreen.value + ',' + sliderBlue.value + ')';

    // Listeners
    sliderRed.addEventListener("change", changeColor);
    sliderGreen.addEventListener("change", changeColor);
    sliderBlue.addEventListener("change", changeColor);

    sliderRed.addEventListener("input", changeColor);
    sliderGreen.addEventListener("input", changeColor);
    sliderBlue.addEventListener("input", changeColor);
}

const changeColor = () => {
    let sliderRed = document.getElementById("slider_red");
    let sliderGreen = document.getElementById("slider_green");
    let sliderBlue = document.getElementById("slider_blue");

    let colorRed = parseInt(sliderRed.value, 10);
    let colorGreen = parseInt(sliderGreen.value, 10);
    let colorBlue = parseInt(sliderBlue.value, 10);

    let colorRedTag = document.getElementById("red");
    let colorGreenTag = document.getElementById("green");
    let colorBlueTag = document.getElementById("blue");

    colorRedTag.innerHTML = colorRed.toString();
    colorGreenTag.innerHTML = colorGreen.toString();
    colorBlueTag.innerHTML = colorBlue.toString();

    let colorBox = document.getElementsByClassName("colorbox")[0];
    colorBox.style.backgroundColor = 'rgb(' + colorRed + ',' + colorGreen + ',' + colorBlue + ')';


}
window.addEventListener("load", setup);