const setup = () => {
    let buttonEdit = document.getElementById('btnEditTxt');
    let pElement = document.getElementById('txtOutput');

    buttonEdit.addEventListener('click', () => {
        pElement.innerHTML = 'Welkom';
    })

}
window.addEventListener("load", setup);