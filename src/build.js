const content = document.getElementById('content');
const header = document.createElement('div');
const headerImage = new Image();
const subheader = document.createElement('div');
export const homeHeader = document.createElement('div');
export const menuHeader = document.createElement('div');
export const contactHeader = document.createElement('div');

const buildPage = () => {

    //apend header to content
    header.classList.add('header');
    content.appendChild(header);


    // append image to header
    headerImage.classList.add('header-image');
    headerImage.src = '../src/images/logo2.png';
    header.appendChild(headerImage);

    // append subheader to content
    subheader.classList.add('subheader');
    content.appendChild(subheader);


    //append home, menu & contact headers to subheader
    homeHeader.innerHTML = 'Home';
    homeHeader.dataset.tab = 'home';
    homeHeader.classList.add('sub-heading');
    subheader.appendChild(homeHeader);

    menuHeader.innerHTML = 'Menu';
    menuHeader.dataset.tab = 'menu';
    menuHeader.classList.add('sub-heading');
    subheader.appendChild(menuHeader);

    contactHeader.innerHTML = 'Contact';
    contactHeader.dataset.tab = 'contact';
    contactHeader.classList.add('sub-heading');
    subheader.appendChild(contactHeader);
}


export default buildPage;

// build homepage