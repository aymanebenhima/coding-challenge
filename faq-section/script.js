// Select all toggle buttons
const faqToggles = document.querySelectorAll('[data-faq-toggle]');

faqToggles.forEach((button) => {
  button.addEventListener('click', () => {
    // Toggle the associated content
    const content = button.nextElementSibling;
    
    // Implement logic to show/hide content
  });
});
