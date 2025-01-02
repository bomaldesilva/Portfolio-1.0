const navLinks = document.querySelectorAll('.nav-links a');

// Adding event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    const navLinksContainer = document.querySelector('.nav-links');
    navLinksContainer.classList.remove('active'); // Close the menu when a link is clicked
  });
});