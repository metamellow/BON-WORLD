var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('slide');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'flex';
}

var slides = document.getElementsByClassName('slide');
var dots = document.getElementsByClassName('dot');
var currentSlide = 0;

showSlide(currentSlide);

function showSlide(n) {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[n].style.display = 'block';
  dots[n].className += ' active';
  currentSlide = n;
}

function nextSlide() {
  if (currentSlide === slides.length - 1) {
    showSlide(0);
  } else {
    showSlide(currentSlide + 1);
  }
}

function previousSlide() {
  if (currentSlide === 0) {
    showSlide(slides.length - 1);
  } else {
    showSlide(currentSlide - 1);
  }
}

function jumpToSlide(n) {
  showSlide(n);
}

setInterval(nextSlide, 5000); // Change slide every 3 seconds
