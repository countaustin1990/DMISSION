// JavaScript for the "Back to Top" button
const backToTopButton = document.getElementById('backToTop');

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};

// When the user clicks on the button, scroll to the top of the document
backToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
