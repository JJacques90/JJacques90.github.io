const setup = () => {
    let label = document.getElementById("label");
    label.addEventListener("click", () => {
        document.getElementById("input").focus();
    });

    let btn = document.getElementById("btn");
    btn.addEventListener("click", createTable);
}

const createTable = () => {
    let table = document.createElement("div");
    table.setAttribute("id", "table");

    // if(table.hasChildNodes()) {
    //     verwijderAlleChildren(table);
    // }

    let input = document.getElementById("input").value;
    if(isNaN(input)) {
        return alert("Invoer moet een nummer zijn!");
    }

    let timeString = getTime();

    let header = createHeader(input, timeString);
    table.appendChild(header);

    for(let i = 0; i < 10; i++) {
        let regel = createRegel(input, i);
        table.appendChild(regel);
    }

    appendToContainer(table);
}

const verwijderAlleChildren = (element) => {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

const getTime = () => {
    const date = new Date();
    let hours = String(date.getHours()).padStart(2, "0");
    let minutes = String(date.getMinutes()).padStart(2, "0");
    let seconds = String(date.getSeconds()).padStart(2, "0");

    return hours + ":" + minutes + ":" + seconds;
}

const createHeader = (input, timeStr) => {
    let header = document.createElement("div");
    header.classList.add("header");
    header.innerText = `Tafel van ${input} aangemaakt op ${timeStr}`;

    return header;
}

const createRegel = (input, i) => {
    let regel = document.createElement("div");
    regel.classList.add("regel");
    regel.innerText = `${input} x ${i + 1} = ${input * (i + 1)}`;

    return regel;
}

const appendToContainer = (table) => {
    let container = document.getElementById("container");
    container.appendChild(table);
}

window.addEventListener("load", setup);