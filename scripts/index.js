const page = document.querySelector('.page');
const content = page.querySelector('.content');

const emailForms = page.querySelectorAll('.form-email');
const sendFormButtons = page.querySelectorAll('.form-email__confirm-button');

emailForms.forEach(function(element) {
  element.addEventListener('submit', handleEmailFormSubmit);
});

function handleEmailFormSubmit (evt) {
  evt.preventDefault();
  sendFormButtons.forEach(function(element) {
    element.textContent = 'Круто, спасибо за доверие!';
  });
}