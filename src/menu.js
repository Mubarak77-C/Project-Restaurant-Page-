export default function loadMenu() {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-content');

    const title = document.createElement('h2');
    title.textContent = 'Our Menu';
    menuDiv.appendChild(title);

    // Array of menu items (Your data source)
    const menuItems = [
        {
            name: 'Margherita Pizza',
            price: '$12',
            description: 'Classic tomato sauce, fresh mozzarella, basil, and extra virgin olive oil.'
        },
        {
            name: 'Pepperoni Inferno',
            price: '$15',
            description: 'Spicy pepperoni, hot honey, mozzarella, and our signature tomato sauce.'
        },
        {
            name: 'Truffle Mushroom',
            price: '$18',
            description: 'Wild mushrooms, truffle oil, garlic cream base, and parmesan.'
        }
    ];

    // Loop through the data and create DOM elements dynamically
    menuItems.forEach(item => {
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('menu-item');

        const itemName = document.createElement('h3');
        itemName.textContent = item.name;

        const itemPrice = document.createElement('span');
        itemPrice.textContent = item.price;

        const itemDesc = document.createElement('p');
        itemDesc.textContent = item.description;

        itemContainer.appendChild(itemName);
        itemContainer.appendChild(itemPrice);
        itemContainer.appendChild(itemDesc);

        menuDiv.appendChild(itemContainer);
    });

    return menuDiv;
}