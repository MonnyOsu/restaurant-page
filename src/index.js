import buildPage from "./build.js";
import { homeHeader, menuHeader, contactHeader } from "./build.js";
import buildAbout from "./about.js";
import buildMenu from "./menu.js";
import buildContact from "./contact.js"


// window.addEventListener('load', buildAbout);

homeHeader.addEventListener('click', () => {
    document.querySelector('.subheader').nextSibling.remove()

    buildAbout();

})

menuHeader.addEventListener('click', () => {
    document.querySelector('.subheader').nextSibling.remove()

    buildMenu();
})

contactHeader.addEventListener('click', () => {
    document.querySelector('.subheader').nextSibling.remove()
    buildContact();
})

window.addEventListener('load', buildPage);
window.addEventListener('load', buildAbout);
