const setup = () => {
    const para = document.createElement("p");
    const node = document.createTextNode("This is text.");
    para.appendChild(node);
    const div = document.getElementById("myDIV");
    div.appendChild(para);
}
window.addEventListener("load", setup);