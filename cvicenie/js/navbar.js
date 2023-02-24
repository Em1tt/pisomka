const navbarButton = document.querySelector('nav a[role="button"]');
const navbarSelector = document.querySelector('nav > div > div > ul');
const navbarButton2 = document.querySelector('nav > div > div > ul li:first-of-type button');

let visible = false;

navbarButton.addEventListener("click", () => {

    if (visible) {
        navbarSelector.style.left = "-300px";
    } else {
        navbarSelector.style.left = "0px";
    }
    visible = !visible;
});
//Vieme, že je viditeľné iba keď je navbar viditeľný (netreba nám if)
navbarButton2.addEventListener("click", () => {
    visible = false;
    navbarSelector.style.left = "-300px";
});