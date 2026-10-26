import pizza1 from './assets/pizza1.jpg';
import pizza2 from './assets/pizza2.jpg';
import pizza3 from './assets/pizza3.jpg';

export default function loadMenu() {



    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-content');

    const title = document.createElement('h2');
    title.textContent = 'Our Menu';
    menuDiv.appendChild(title);

    // Array of menu items (Your data source)
    // 2. Attach the imported image variables directly to your data items
    const menuItems = [
        {
            name: 'Margherita Pizza',
            price: '$12',
            description: 'Classic tomato sauce, fresh mozzarella, basil, and extra virgin olive oil.',
            image: pizza1
        },
        {
            name: 'Pepperoni Inferno',
            price: '$15',
            description: 'Spicy pepperoni, hot honey, mozzarella, and our signature tomato sauce.',
            image: pizza2
        },
        {
            name: 'Truffle Mushroom',
            price: '$18',
            description: 'Wild mushrooms, truffle oil, garlic cream base, and parmesan.',
            image: pizza3
        }
    ];

    // Loop through the data and create DOM elements dynamically
    menuItems.forEach(item => {
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('menu-item');

        // Create and append the image
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;
        img.classList.add('menu-img'); // Optional: for CSS styling later

        const itemName = document.createElement('h3');
        itemName.textContent = item.name;

        const itemPrice = document.createElement('span');
        itemPrice.textContent = item.price;

        const itemDesc = document.createElement('p');
        itemDesc.textContent = item.description;

        // Append everything into the item card
        itemContainer.appendChild(img);
        itemContainer.appendChild(itemName);
        itemContainer.appendChild(itemPrice);
        itemContainer.appendChild(itemDesc);

        menuDiv.appendChild(itemContainer);
    });

    return menuDiv;
}