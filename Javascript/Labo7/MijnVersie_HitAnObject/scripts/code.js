let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 1000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};

const setup = () => {
    let target = document.getElementById("target");
    let start = document.getElementById("start");

    start.addEventListener("click", () => {
        start.style.display = "none";
        move(target);
        global.timeoutId = startTimer(target);
    });
    target.addEventListener("click", respond);
};

const startTimer = (target) => {
    return setInterval(move, global.MOVE_DELAY, target);
}

const respond = (e) => {
    // clear init timer
    clearInterval(global.timeoutId);

    // quit if bomb is clicked
    if(e.target.getAttribute("src") === "images/0.png") {
        return alert("Game over!!");
    }

    // change image and position
    move(e.target);

    // update score
    updateScore();

    // start new timer
    global.timeoutId = startTimer(e.target);
}

const move = (target) => {
    moveTarget(target);
    changeImage(target);
}

const moveTarget = (target) => {
    let playField = document.getElementById("playField");
    let maxX = playField.clientWidth - global.IMAGE_SIZE;
    let maxY = playField.clientWidth - global.IMAGE_SIZE;
    target.style.left = randomNum(0, maxX) + 'px';
    target.style.top = randomNum(0, maxY) + 'px';
}

const changeImage = (target) => {
    target.setAttribute("src", global.IMAGE_PATH_PREFIX + randomNum(0, global.IMAGE_COUNT) + global.IMAGE_PATH_SUFFIX);
}

const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const updateScore = () => {
    let score = document.getElementById("score");
    global.score++;
    score.textContent = "score: " + global.score;
}

window.addEventListener("load", setup);


