const setup = () => {
    let list = document.getElementById("gemeente");

    let inputArr = askInputs();
    console.log(inputArr);
    for(let i = 0; i < inputArr.length; i++){
        list.innerHTML += `<option value="${inputArr[i]}">${inputArr[i]}</option>`
    }
}

const askInputs = () => {
    let flag = true;
    let arr = [];
    while(flag) {
        let input = prompt("Geef een gemeente in: ");
        if(input.toLowerCase().localeCompare("stop") === 0) {
            flag = false;
            return arr;
        }
        arr.push(input);
    }
    return arr;
}

window.addEventListener("load", setup);