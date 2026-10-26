export default function loadAbout(){
    const loadDiv=document.createElement('div');
    loadDiv.classList.add('About-content')

    const headline = document.createElement('h2');
    headline.textContent="0123456789";

    //p address fpr
    const paragraph = document.createElement('p');
    paragraph.textContent="xyz Block 01 callifornia street town city";

    const location=document.createElement('a');
    location.textContent="location";

    loadDiv.appendChild(headline);
    loadDiv.appendChild(paragraph);
    loadDiv.appendChild(location);

    return loadDiv;
}