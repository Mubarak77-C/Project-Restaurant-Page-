export default function loadPage() {
    //here same work as we do in html all tag element parent child and dynamic content
    const contentDiv = document.querySelector('#content');
    const header = document.createElement('header');
    const nav = document.createElement('nav');

    const homeButton=document.querySelector('button')
    homeButton.textContent='Home';
    homeButton.classList.add('nav-btn');

    const menuButton= document.createElement('button');
    menuButton.textContent='Menu';
    menuButton.classList.add('nav-btn');

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    header.appendChild(nav);

    // Create a container where dynamic page content will live
    const tabContent = document.createElement('div');
    tabContent.id = 'tab-content';

    // Append everything to the main #content div
    contentDiv.appendChild(header);
    contentDiv.appendChild(tabContent);
}