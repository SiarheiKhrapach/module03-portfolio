import './styles/main.scss';

// Menu

window.openModal = function () {
    document.getElementById("modal").style.top = "0px";
  };

  window.closeModal = function () {
    document.getElementById("modal").style.top = "-900px";
  };

  // Smooth Scroll
      
const links = document.querySelectorAll('.header__nav-link');

links.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop, 
        behavior: 'smooth' 
      });
    }
  });
});

document.querySelectorAll('.footer__footer-link').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); 
    
    const targetId = this.getAttribute('href'); 
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});


