// Javascript for changing the background on page load/reload.

window.addEventListener('load', function() {
    // Array of background images in the images folder
    const backgroundImageNames = [
        'bg1.webp',
        'bg2.webp',
        'bg3.webp',
        'bg4.webp',
        'bg5.webp',
        'bg6.webp'
    ];

    // Generate a random inde to pick a background image.
    const randomIndex = Math.floor(Math.random() * backgroundImageNames.length);

    // Base URL of the images folder
    const baseUrl = 'images/';

    //Construct thee URL of the randomly chosen image
    const imageUrl = baseUrl + backgroundImageNames[randomIndex];

    //set the background image of the body via css
    document.body.style.backgroundImage = `url('${imageUrl}')`;
});