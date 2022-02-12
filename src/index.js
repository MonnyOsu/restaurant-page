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

//  to remove homeContainer.remove() - might need to export the function or variable
// document.querySelector('.content div:nth-child(3))
// document.getElementById('content').firstChild.nextSibling.nextSibling.nextSibling

// document.querySelector('.subheader').nextSibling.remove()
// document.getElementById('content').lastChild.remove()