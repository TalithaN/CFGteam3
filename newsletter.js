const showForm= document.querySelector('.newsletter form');
const favDialog = document.querySelector('dialog');

// "Show the dialog" button opens the <dialog> modally
showForm.addEventListener('submit', (e) => {
    e.preventDefault();
    favDialog.showModal();
  });

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });