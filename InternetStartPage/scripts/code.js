let global = {
    count: 0,
    cards: []
}

const setup = () => {
    // check if there is anything saved
    if(retrieveStorage()) {
        rebuildCards();
    }

    let searchBtn = document.getElementById("btnGo");
    searchBtn.addEventListener("click", submit);
}

const submit = () => {
    // get title and subtitle from input
    let values = checkInput();

    // create card
    let card = createCard(...values);

    // add to history container
    addToHistoryContainer(card);

    // add card object into array
    addToCardArray(...values);

    // save to local storage
    saveToLocalStorage();
}

const checkInput = () => {
    let inputStr = document.getElementById("commandoInput").value;

    // check for input errors
    if(!validate(inputStr)) {
        return;
    }

    let platformChar = inputStr.substring(1,2);
    let searchString = inputStr.substring(3);
    let url;
    switch (platformChar) {
        case "y":
            url = `https://youtube.com/results?search_query=${searchString}`;
            window.open(url, "_blank");
            return ["youtube", searchString, url];
        case "g":
            url = "https://www.google.com/search?q=" + searchString;
            window.open(url, "_blank");
            return ["google", searchString, url];
        default:
            return alert("Incorrect platform character");
    }

}

const validate = (inputStr) => {
    if(!inputStr.startsWith("/", 0)) {
        alert(`Commando's start with "/[character] [search term]"`);
        return false;
    }

    if(inputStr.length <= 3) {
        alert("Please enter a search term");
        return false;
    }

    if(inputStr[2] !== " ") {
        alert("add a space between command and search term");
        return false;
    }

    return true;
}

const createCard = (title, subTitle, url) => {
    // card container
    let card = document.createElement("div");
    card.classList.add("card");

    // card body
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);

    // card title
    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerHTML = title;

    // card sub title
    let cardSubTitle = document.createElement("h6");
    cardSubTitle.classList.add("card-sub-tile");
    cardSubTitle.innerHTML = subTitle;

    // card button
    let cardBtn = document.createElement("button");
    cardBtn.classList.add("btn");
    cardBtn.classList.add("btn-primary");
    cardBtn.innerHTML = "Go!";

    cardBtn.addEventListener("click", () => {
        goToLink(url);
    });

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardSubTitle);
    cardBody.appendChild(cardBtn);

    return card;
}

const goToLink = (url) => {
    window.open(url, "_blank");
}

const addToHistoryContainer = (card) => {
    let historyContainer = document.getElementById("history_box");

    // find the last row
    let lastRow;
    if(historyContainer.lastElementChild.tagName === "H2") {
        lastRow = createRow();
        historyContainer.appendChild(lastRow);
    } else {
        lastRow = historyContainer.lastElementChild;
    }

    // find last used col
    if(lastRow.lastElementChild.hasChildNodes()) {
        // row full, create new row
        lastRow = createRow();
        historyContainer.appendChild(lastRow);
        // insert in first col
        lastRow.childNodes[0].appendChild(card);
    } else {
        for(let i = 0; i < lastRow.childElementCount; i++) {
            if(!lastRow.childNodes[i].hasChildNodes()) {
                return lastRow.childNodes[i].appendChild(card);
            }
        }
    }
}

const createRow = () => {
    let row = document.createElement("div");
    row.classList.add("row");

    for(let i = 0; i < 3; i++) {
        let col = document.createElement("div");
        col.classList.add("col");

        row.appendChild(col);
    }

    return row;
}

const addToCardArray = (title, subTitle, url) => {
    let cardObj = {
        id: global.count,
        title: title,
        subtitle: subTitle,
        url: url
    }
    global.count++;
    global.cards.push(cardObj);
}

const saveToLocalStorage = () => {
    const arrJSON = JSON.stringify(global.cards);
    localStorage.setItem("internetStartPage", arrJSON);
}

const retrieveStorage = () => {
    let arrJSON = localStorage.getItem("internetStartPage");
    if(arrJSON !== null) {
        global.cards = JSON.parse(arrJSON);
        console.log(global.cards);
        return true;
    }
    return false;
}

const rebuildCards = () => {
    for(let i = 0; i < global.cards.length; i++) {
        let cardTitle = global.cards[i].title;
        let cardSubTitle = global.cards[i].subtitle;
        let url = global.cards[i].url;

        // create the card
        let card = createCard(cardTitle, cardSubTitle, url);

        // add to history container
        addToHistoryContainer(card);
    }
}

window.addEventListener("load", setup);