import './style.css';
import loadPage from './pageLoad.js';
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadAbout from './about.js';

// 1. Build the initial page skeleton (Header, Nav, #tab-content)
loadPage();
console.log("Shell loaded successfully!");

// 2. Target the containers and buttons created by your pageLoad module
const tabContent = document.querySelector('#tab-content');
const homeButton = document.querySelector('#home-btn');
const menuButton = document.querySelector('#menu-btn');
const aboutButton = document.querySelector('#about-btn');

// Helper function to handle active class switching
function setActiveButton(button) {
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}

// 3. Render the Home page by default when the site first opens (and highlight Home button)
tabContent.appendChild(loadHome());
if (homeButton) setActiveButton(homeButton);

// 4. Wire up the clean, unified tab-switching logic
homeButton.addEventListener('click', (e) => {
    setActiveButton(e.target);
    tabContent.replaceChildren();
    tabContent.appendChild(loadHome());
});

menuButton.addEventListener('click', (e) => {
    setActiveButton(e.target);
    tabContent.replaceChildren();
    tabContent.appendChild(loadMenu());
});

aboutButton.addEventListener('click', (e) => {
    setActiveButton(e.target);
    tabContent.replaceChildren();
    tabContent.appendChild(loadAbout());
});