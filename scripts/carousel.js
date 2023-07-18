document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel');
  const dotsContainer = document.querySelector('.carousel-dots');

  // Adicione o número correto de dots
  for (let i = 0; i < carousel.children.length; i++) {
    const dot = document.createElement('div');
    dot.classList.add('carousel-dot');
    dot.addEventListener('click', function () {
      goToSlide(i);
    });
    dotsContainer.appendChild(dot);
  }

  const dots = dotsContainer.children;
  let currentIndex = 0;

  function goToSlide(index) {
    carousel.style.transform = `translateX(-${index * 100}%)`;

    // Remove a classe 'active' de todos os slides
    Array.from(carousel.children).forEach(function (item) {
      item.classList.remove('active');
    });

    // Adiciona a classe 'active' apenas ao slide selecionado
    carousel.children[index].classList.add('active');

    // Atualiza a classe 'active' do dot correspondente
    dots[currentIndex].classList.remove('active');
    dots[index].classList.add('active');

    currentIndex = index;
  }

  function nextSlide() {
    if (currentIndex === carousel.children.length - 1) {
      goToSlide(0);
    } else {
      goToSlide(currentIndex + 1);
    }
  }

  setInterval(nextSlide, 5000); // Altere o tempo para alterar o intervalo entre os slides

  goToSlide(0); // Define o primeiro slide como ativo inicialmente
});
