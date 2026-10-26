//console.log('wbpack connected');
import './style.css';
import loadPage from './pageLoad.js';
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadAbout from './about.js';

// 1. Build the initial page skeleton (Header, Nav, #tab-content)
// 1. Build the shell first (this creates the #content and #tab-content divs)
loadPage();
//loadHome();
console.log("Shell loaded successfully!")

// 2. Now grab the containers and buttons from the DOM
// 2. Target the containers and buttons created by your pageLoad module
const tabContent = document.querySelector('#tab-content');
const homeButton = document.querySelector('#home-btn'); // Make sure you gave your buttons IDs in pageLoad.js!
const menuButton = document.querySelector('#menu-btn');
const aboutButton = document.querySelector('#about-btn');

// 3. Render the Home page by default when the site first loads
tabContent.appendChild(loadHome());

// 4. Wire up the tab-switching logic with destruction (replaceChildren)
homeButton.addEventListener('click', () => {
    tabContent.replaceChildren(); // Wipes out whatever is currently there
    tabContent.appendChild(loadHome()); // Renders Home
});

menuButton.addEventListener('click', () => {
    tabContent.replaceChildren(); // Wipes out whatever is currently there
    tabContent.appendChild(loadMenu()); // Renders Menu
});

aboutButton.addEventListener('click', () => {
    tabContent.replaceChildren(); // Wipes out whatever is currently there
    tabContent.appendChild(loadAbout()); // Renders Menu
});
