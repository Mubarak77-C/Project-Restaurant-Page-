

export default function loadPage() {
    //here same work as we do in html all tag element parent child and dynamic content
    const contentDiv = document.querySelector('#content');
  
    // Create header and nav
    const header = document.createElement('header');
    const nav = document.createElement('nav');

    // 1. Home Button
    const homeButton = document.createElement('button')
    homeButton.textContent = 'Home';
    homeButton.id = 'home-btn'; // <--- Make sure this ID exists
    homeButton.classList.add('nav-btn');

    // 2. Menu Button
    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    menuButton.id = 'menu-btn'; // <--- Mandatory!
    menuButton.classList.add('nav-btn');

    // 3. About Button
    const loadButton = document.createElement('button');
    loadButton.textContent = 'About';
    loadButton.id = 'about-btn'; // <--- Mandatory!
    loadButton.classList.add('nav-btn');

    // Append buttons to nav
    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(loadButton);
    header.appendChild(nav);

    // Create a container where dynamic page content will live
    const tabContent = document.createElement('div');
    tabContent.id = 'tab-content';

    // Append everything to the main #content div
    contentDiv.appendChild(header);
    contentDiv.appendChild(tabContent);
}