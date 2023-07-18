// Script para controlar o menu toggle
const menuToggle = document.getElementById('menuToggle');
const navbarLinks = document.getElementById('navbarLinks');

menuToggle.addEventListener('click', () => {
  navbarLinks.classList.toggle('show');
});
 

// Get a reference to the button, modal, and close button
const openModalButton = document.getElementById('openModalButton');
const modal = document.getElementById('modal');
const closeButton = document.querySelector('.modal-close');

// Add a click event listener to the button
openModalButton.addEventListener('click', function() {
  // Display the modal
  modal.style.display = 'block';
});

// Add a click event listener to the close button
closeButton.addEventListener('click', function() {
  // Hide the modal
  modal.style.display = 'none';
});