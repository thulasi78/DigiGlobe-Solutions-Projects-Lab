const images = document.querySelectorAll('.clickable-image');

images.forEach(function(image) {
    image.addEventListener('click', function() {
        const content = image.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});
document.getElementById('hamburger').onclick = function() {
        document.getElementById('nav-links').classList.toggle('active');
    };