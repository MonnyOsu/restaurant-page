const buildAbout = () => {
    const content = document.getElementById('content');
    const aboutContainer = document.createElement('div');
    const collageGrid = document.createElement('div');
    const galleryItemOne = document.createElement('div');
    const galleryItemTwo = document.createElement('div');
    const galleryItemThree = document.createElement('div');
    const galleryItemFour = document.createElement('div');
    const galleryItemFive = document.createElement('div');
    const aboutImageDoughOne = new Image();
    const aboutImageDoughTwo = new Image();
    const aboutImageTable = new Image();
    const aboutImageChacuterie = new Image();
    const aboutImageSandwich = new Image();
    const aboutImagePickles = new Image();
    const aboutText = document.createElement('div');

    aboutContainer.classList.add('about-container');
    content.appendChild(aboutContainer);

    collageGrid.classList.add('collage-grid');
    aboutContainer.appendChild(collageGrid);

    aboutImageDoughOne.src = '../src/images/dough1.jpg';
    aboutImageTable.src = '../src/images/table.jpg';
    aboutImageChacuterie.src = '../src/images/chacuterie.jpg';
    aboutImagePickles.src = '../src/images/pickles.jpg';
    aboutImageSandwich.src = '../src/images/sandwich.jpg';

    aboutImageDoughOne.classList.add('image');
    aboutImageDoughTwo.classList.add('image');
    aboutImageTable.classList.add('image', 'table-image');
    aboutImageChacuterie.classList.add('image');
    aboutImagePickles.classList.add('image');
    aboutImageSandwich.classList.add('image');

    galleryItemOne.classList.add('image-one');
    galleryItemTwo.classList.add('image-two');
    galleryItemThree.classList.add('image-three');
    galleryItemFour.classList.add('image-four');
    galleryItemFive.classList.add('image-five');

    galleryItemOne.appendChild(aboutImageChacuterie);
    galleryItemTwo.appendChild(aboutImageSandwich);
    galleryItemThree.appendChild(aboutImagePickles);
    galleryItemFour.appendChild(aboutImageDoughOne);
    galleryItemFive.appendChild(aboutImageTable);

    collageGrid.appendChild(galleryItemOne);
    collageGrid.appendChild(galleryItemTwo);
    collageGrid.appendChild(galleryItemThree);
    collageGrid.appendChild(galleryItemFour);
    collageGrid.appendChild(galleryItemFive);

    aboutText.classList.add('about-text');
    aboutText.innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab saepe suscipit autem labore, officiis laborum recusandae culpa temporibus non similique aut illum dolorum laboriosam, dolores, qui optio. Reiciendis, aut voluptat <br><br> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab saepe suscipit autem labore, officiis laborum recusandae culpa temporibus non similique aut illum dolorum laboriosam, dolores, qui optio. Reiciendis, aut voluptat'
    aboutContainer.appendChild(aboutText)

}

export default buildAbout;