const setup = () => {
    document.getElementById("btn").addEventListener("click", validate);
}

const validate = () => {
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let birthDay = document.getElementById("birthday");
    let email = document.getElementById("email");
    let kids = document.getElementById("kids");

    // Controleer voornaam
    validateFirstName(firstName);
    // Controleer familienaam
    validateLastName(lastName);
    // Controleer geboortedatum
    validateBirthDay(birthDay);
    // Controleer email
    validateEmail(email);
    // Controleer aantal kinderen
    validateKids(kids)
}

const isEmpty = (s) => {
    return s.length === 0;
}

const required = (el, errEl) => {
    el.classList.add("invalid");
    errEl.textContent = "verplicht veld";
}

const resetEl = (el, errEl) => {
    el.classList.remove("invalid");
    errEl.textContent = "";
}

const validateFirstName = (firstName) => {
    let errFirstName = document.getElementById("errFirstName");
    resetEl(firstName, errFirstName);

    if(firstName.value.length > 30) {
        firstName.classList.add("invalid");
        errFirstName.textContent = "max. 30 character";
    }
}

const validateLastName = (lastName) => {
    let errLastName = document.getElementById("errLastName");
    resetEl(lastName, errLastName);

    if(isEmpty(lastName.value)) {
        required(lastName, errLastName);
    } else if(lastName.value.length > 50) {
        lastName.classList.add("invalid");
        errLastName.textContent = "max. 50 character";
    }
}

const validateBirthDay = (birthDay) => {
    let errBirthDay = document.getElementById("errBirthDay");
    resetEl(birthDay, errBirthDay);

    let birthDayStr = birthDay.value;
    let year = birthDayStr.substring(0, 4);
    let month = birthDayStr.substring(5, 7);
    let day = birthDayStr.substring(8, 10);

    if(isEmpty(birthDayStr)) {
        required(birthDay, errBirthDay);
    } else if(birthDayStr.charAt(4) !== "-" || birthDayStr.charAt(7) !== "-") {
        birthDay.classList.add("invalid");
        errBirthDay.textContent = "fout formaat";
    } else if(isNaN(year) || year.length !== 4) {
        birthDay.classList.add("invalid");
        errBirthDay.textContent = "fout jaartal";
    } else if((month < 0 || day < 0) || (month.length !== 2 || day.length !== 2)) {
        birthDay.classList.add("invalid");
        errBirthDay.textContent = "foute maand of dag";
    }
}

const validateEmail = (email) => {
    let errEmail = document.getElementById("errEmail");
    resetEl(email, errEmail);

    let emailStr = email.value;
    let atPos = emailStr.indexOf("@");
    let beforeAt = emailStr.substring(0, atPos);
    let afterAt = emailStr.substring(atPos + 1, emailStr.length);

    if(isEmpty(emailStr)) {
        required(email, errEmail);
    } else if(!emailStr.includes("@")) {
        email.classList.add("invalid");
        errEmail.textContent = "ongeldig email adres";
    } else if(beforeAt.length < 1 || afterAt.length < 1) {
        email.classList.add("invalid");
        errEmail.textContent = "ongeldig email adres";
    }
}

const validateKids = (kids) => {
    let errKids = document.getElementById("errKids");
    resetEl(kids, errKids);

    if(isNaN(kids.value)) {
        kids.classList.add("invalid");
        errKids.textContent = "geen getal";
    } else if(kids.value < 0) {
        kids.classList.add("invalid");
        errKids.textContent = "geen positief getal";
    } else if(kids.value > 99) {
        kids.classList.add("invalid");
        errKids.textContent = "te vruchtbaar";
    }
}

window.addEventListener("load", setup);