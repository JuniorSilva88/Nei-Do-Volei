document.addEventListener('DOMContentLoaded', function () {
  // Seleciona todas as imagens com a classe 'zoomable-img' e adiciona o efeito de zoom
  var images = document.querySelectorAll('.zoomable-img'); // Usamos 'var' para garantir compatibilidade

  images.forEach(function (image) {
      image.addEventListener('click', function () {
          if (this.classList.contains('zoom')) {
              this.classList.remove('zoom'); // Remove o zoom se já estiver aplicado
          } else {
              this.classList.add('zoom'); // Aplica o zoom quando a imagem é clicada
          }
      });
  });

  // Inicializa o Swiper
  var swiper = new Swiper(".swiper", {
      cssMode: true,
      loop: true,
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
      pagination: {
          el: ".swiper-pagination",
      },
      keyboard: true,
  });
});
