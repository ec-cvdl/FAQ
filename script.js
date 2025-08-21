// Interaction FAQ accordéon
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const content = document.getElementById(button.getAttribute('aria-controls'));
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !expanded);
    content.hidden = expanded;
    content.setAttribute('aria-hidden', expanded);
  });
});

// Gestion de la modale d'assistance
const openModal = document.getElementById('open-modal');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');
const modalInput = document.getElementById('modal-input');

openModal.addEventListener('click', () => {
  modal.hidden = false;
  modalInput.focus();
});

closeModal.addEventListener('click', () => {
  modal.hidden = true;
  openModal.focus();
});

function showQuestion(id) {
  document.querySelectorAll('.question, .solution').forEach(el => el.hidden = true);
  document.getElementById(id).hidden = false;
}

function showSolution(id) {
  document.querySelectorAll('.question, .solution').forEach(el => el.hidden = true);
  document.getElementById(id).hidden = false;
}
