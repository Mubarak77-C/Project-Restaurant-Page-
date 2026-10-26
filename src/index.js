console.log('wbpack connected');

//selecting html content in js to inject in dom and append to pass fetch in user browser
const contentDiv=document.querySelector('#content');
const heading = document.createElement('h1');
heading.textContent ="Welcome to My Restaurant";

//append it to page 
contentDiv.appendChild(heading);