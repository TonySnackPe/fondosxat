function loadImage() {
    var imageUrl = document.getElementById('imageUrlInput').value;
    var imageContainer = document.getElementById('imageContainer');

    imageContainer.style.backgroundImage = 'url("' + imageUrl + '")';
}

document.getElementById('imageUrlInput').addEventListener('input', loadImage);

//Light and dark theme button

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function toggleDarkMode() {
    let isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
}

  // On page load
document.addEventListener('DOMContentLoaded', (event) => {
    if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    }
});
