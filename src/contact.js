const buildContact = () => {
    const content = document.getElementById('content');
    const contactContainer = document.createElement('div');
    const contactInfoContainer = document.createElement('div');
    const contactHeader = document.createElement('h1');
    const contactInfo = document.createElement('div');
    const contactImgContainer = document.createElement('div');
    const contactImg = new Image();

    contactContainer.classList.add('contact-container');
    content.appendChild(contactContainer);

    contactInfoContainer.classList.add('contact-info-container');
    contactHeader.classList.add('contact-header');
    contactInfo.classList.add('contact-info');
    contactInfo.innerHTML = '8am - 7pm daily <br> <br> 23 Rona St, Eastbourne, Wellington, 5013 <br> <br> +64 4562198 <br> <br> monssubs@bestsandwich.com'

    contactContainer.appendChild(contactInfoContainer);

    contactInfoContainer.appendChild(contactHeader)
    contactInfoContainer.appendChild(contactInfo)

    contactImgContainer.classList.add('contact-image-container');
    contactImg.src = '../src/images/shop.jpg'
    contactImg.classList.add('contact-image');

    contactContainer.appendChild(contactImgContainer);
    contactImgContainer.appendChild(contactImg);
}

export default buildContact;