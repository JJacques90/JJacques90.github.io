const setup = () => {
    let txtInputField = document.getElementById('txtInput');
    let txtOutputField = document.getElementById('txtOutput');
    let startField = document.getElementById('start');
    let endField = document.getElementById('end');
    let btn = document.getElementById('btn');

    btn.addEventListener('click', () => {
        let txtInput = txtInputField.value;
        let start = parseInt(startField.value, 10);
        let end = parseInt(endField.value, 10);
        txtOutputField.innerHTML = txtInput.substring(start, end);
    })
}
window.addEventListener("load", setup);