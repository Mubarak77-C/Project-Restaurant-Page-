export default function loadHome(){
    //div element
    const homeDiv=document.createElement('div');
    homeDiv.classList.add('home-content');

    //h2
    const headline = document.createElement('h2');
    headline.textContent ="Best Pizza in Town"

    //p
    const paragraph = document.createElement('p');
    paragraph.textContent="We serve authentic wood-fired pizza made with love and fresh ingredients.";

    //append all element child to parent
    homeDiv.appendChild(headline);
    homeDiv.appendChild(paragraph);

    return homeDiv;
}
