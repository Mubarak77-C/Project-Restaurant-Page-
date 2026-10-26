export default function loadAbout() {
    const loadDiv = document.createElement('div');
    loadDiv.classList.add('about-content'); // Tip: lowercase class names match CSS conventions better

    const headline = document.createElement('h2');
    headline.textContent = "Contact & Location";

    // Phone number paragraph
    const phoneP = document.createElement('p');
    phoneP.textContent = "📞 Phone: (555) 123-4567";

    // Address paragraph
    const addressP = document.createElement('p');
    addressP.textContent = "📍 Address: 123 California Street, Town City";

    // Map location link
    const locationLink = document.createElement('a');
    locationLink.textContent = "Open in Google Maps";
    locationLink.href = "https://maps.google.com";
    locationLink.target = "_blank"; // Opens in a new tab
    locationLink.classList.add('map-link');

    // Append everything to the container
    loadDiv.appendChild(headline);
    loadDiv.appendChild(phoneP);
    loadDiv.appendChild(addressP);
    loadDiv.appendChild(locationLink);

    return loadDiv;
}