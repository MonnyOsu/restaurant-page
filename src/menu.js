const buildMenu = () => {
    const content = document.getElementById('content');
    const menuContainer = document.createElement('div');
    const menuHeaderContainer = document.createElement('div');
    const menuHeader = document.createElement('h1');
    const menuSubheader = document.createElement('div');
    const menuItemContainer = document.createElement('div');
    const menuItemOneHeader = document.createElement('h2');
    const menuItemOneDescription = document.createElement('div');
    const menuItemTwoHeader = document.createElement('h2');
    const menuItemTwoDescription = document.createElement('div');
    const menuItemThreeHeader = document.createElement('h2');
    const menuItemThreeDescription = document.createElement('div');
    const menuItemFourHeader = document.createElement('h2');
    const menuItemFourDescription = document.createElement('div');
    const menuItemFiveHeader = document.createElement('h2');
    const menuItemFiveDescription = document.createElement('div');
    const menuItemExtrasHeader = document.createElement('h2');
    const menuItemExtrasDescription = document.createElement('div');

    menuContainer.classList.add('menu-container');
    menuHeaderContainer.classList.add('menu-header-container');
    menuItemContainer.classList.add('menu-item-container');

    content.appendChild(menuContainer);
    menuContainer.appendChild(menuHeaderContainer)
    menuContainer.appendChild(menuItemContainer)

    // menu headers
    menuHeader.classList.add('menu-header');
    menuHeader.textContent = 'Deli Subs';

    menuSubheader.classList.add('menu-subheader');
    menuSubheader.textContent = 'Baked fresh daily';

    menuHeaderContainer.appendChild(menuHeader);
    menuHeaderContainer.appendChild(menuSubheader);

    //menu item one
    menuItemOneHeader.classList.add('menu-item-header');
    menuItemOneHeader.textContent = 'Number One:';
    menuItemOneDescription.classList.add('menu-item-description');
    menuItemOneDescription.textContent = 'Shaved leg ham, cheddar, tomato, mustard pickle';

    menuItemContainer.appendChild(menuItemOneHeader);
    menuItemContainer.appendChild(menuItemOneDescription);

    //menu item two

    menuItemTwoHeader.classList.add('menu-item-header');
    menuItemTwoHeader.textContent = 'Number Two:';
    menuItemTwoDescription.classList.add('menu-item-description');
    menuItemTwoDescription.textContent = 'Artichoke, roast capscicum, buffalo mozzerella, rocket, olive tapenade';

    menuItemContainer.appendChild(menuItemTwoHeader);
    menuItemContainer.appendChild(menuItemTwoDescription);

    //menu item three
    menuItemThreeHeader.classList.add('menu-item-header');
    menuItemThreeHeader.textContent = 'Number Three:';
    menuItemThreeDescription.classList.add('menu-item-description');
    menuItemThreeDescription.textContent = 'Sopressa salami, roast capsicum, black olives, rocket pickled chili mayo';

    menuItemContainer.appendChild(menuItemThreeHeader);
    menuItemContainer.appendChild(menuItemThreeDescription);

    //menu item four
    menuItemFourHeader.classList.add('menu-item-header');
    menuItemFourHeader.textContent = 'Number Four:';
    menuItemFourDescription.classList.add('menu-item-description');
    menuItemFourDescription.textContent = 'Heirloom tomatos, basil, marinated goats cheese';

    menuItemContainer.appendChild(menuItemFourHeader);
    menuItemContainer.appendChild(menuItemFourDescription);

    //menu item five
    menuItemFiveHeader.classList.add('menu-item-header');
    menuItemFiveHeader.textContent = 'Number Five:';
    menuItemFiveDescription.classList.add('menu-item-description');
    menuItemFiveDescription.textContent = 'Proscuitto, fig, brie, balsamic glaze';

    menuItemContainer.appendChild(menuItemFiveHeader);
    menuItemContainer.appendChild(menuItemFiveDescription);

    // Menu item extras 
    menuItemExtrasHeader.classList.add('menu-item-header');
    menuItemExtrasHeader.textContent = 'Extras:';
    menuItemExtrasDescription.classList.add('menu-item-description');
    menuItemExtrasDescription.textContent = 'Pickles, olives, avacado, crisps, mustard, aioli';

    menuItemContainer.appendChild(menuItemExtrasHeader);
    menuItemContainer.appendChild(menuItemExtrasDescription);
}

export default buildMenu;