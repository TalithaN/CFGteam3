const showForm= document.querySelector('.newsletter form');
const favDialog = document.querySelector('dialog');

// "Show the dialog" button opens the <dialog> modally
showForm.addEventListener('submit', (e) => {
    e.preventDefault();
    favDialog.showModal();
  });