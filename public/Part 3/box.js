var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
  var numberOfStars = 20;
  confetti.start();


  modal.forEach(button => {
    button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.modalTarget)
      openModal(modal)
    })
  })
  overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
      closeModal(modal)
    })
  })
  span.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal')
      closeModal(modal)
    })
  })

  function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
  }

  function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
  }

  for (var i = 0; i < numberOfStars; i++) {
    $('.modal-body').append('<div class="blob fa fa-star ' + i + '"></div>');
  }

  animateText();

  animateBlobs();


}


span.onclick = function () {
  modal.style.display = "none";
  confetti.stop();
}


window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function okey() {
  window.location.href = '/4';
}