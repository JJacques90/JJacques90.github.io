const setup = () => {
    // Get elements
    let sliders = document.getElementsByClassName("slider");
    let save = document.getElementById("save");
    for(let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", changeColor);
        sliders[i].addEventListener("input", changeColor);
    }
    changeColor();

    save.addEventListener("click", savePreset);
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

const savePreset = () => {
    // create the swatch
    let preset = createPreset();

    // configure swatch
    configureSwatch(preset);

    // add swatch to container
    // create the box
    let box = document.getElementById("preset-box");
    if(box.childElementCount === 0) {
        box.classList.toggle("hidden");
    }
    box.appendChild(preset);
}

const createPreset = () => {
    // create swatch
    let swatch = document.createElement("div");
    swatch.setAttribute("id", "swatch-preset");
    swatch.addEventListener("click", swapColor);

    // set colors
    configureSwatch(swatch);

    // create button
    let button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("id", "remove");
    button.textContent = "X";
    button.addEventListener("click", removePreset);

    swatch.appendChild(button);
    return swatch;
}

const removePreset = (e) => {
    let el = e.target.parentElement;
    let box = el.parentElement;
    el.remove();
    if(box.childElementCount === 0) {
        box.classList.toggle("hidden");
    }
    e.stopPropagation();
}

const configureSwatch = (swatch) => {
    let red = document.getElementById("slider_red").value;
    swatch.setAttribute("data-red", red);
    let green = document.getElementById("slider_green").value;
    swatch.setAttribute("data-green", green);
    let blue = document.getElementById("slider_blue").value;
    swatch.setAttribute("data-blue", blue);

    swatch.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
}

const swapColor = (e) => {
    document.getElementById("slider_red").value = e.target.getAttribute("data-red");
    document.getElementById("slider_green").value = e.target.getAttribute("data-green");
    document.getElementById("slider_blue").value = e.target.getAttribute("data-blue");

    changeColor();
}

window.addEventListener("load", setup);