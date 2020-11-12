window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0) ;
});


document.querySelector(".menu-icon").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
  });

  ScrollReveal().reveal('.cards', {delay:400});
  ScrollReveal().reveal('.footer', {delay:400});
  ScrollReveal().reveal('.banner', {delay:400});
