const setup = () => {
    let s = "De man van An geeft geen hand aan ambetante verwanten".toLowerCase();
    let count = 0;

    while(s.indexOf("an") !== -1) {
        s = s.slice(s.indexOf("an") + 2, s.length);
        count++;
    }
    console.log(count);

    s = "De man van An geeft geen hand aan ambetante verwanten".toLowerCase();
    count = 0;
    while(s.lastIndexOf("an") !== -1) {
        s = s.slice(0, s.lastIndexOf("an"));
        count++;
    }
    console.log(count);
}
window.addEventListener("load", setup);