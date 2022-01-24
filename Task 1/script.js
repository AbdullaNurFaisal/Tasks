
const flip = () => {
    const lightBulb = document.getElementById("lightBulb");
    const on = "./images/bulbOn.gif";
    const off = "./images/bulbOff.gif";
    if (lightBulb.src.match(off)) {
        lightBulb.src = on;
    } else {
        lightBulb.src = off;
    }
};
