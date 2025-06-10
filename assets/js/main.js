wow = new WOW({
  boxClass: 'wow', // default
  animateClass: 'animated', // default
  offset: 0, // default
  mobile: true, // default
  live: true // default
})
wow.init();
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const scrollHeader = () => {
  const header = document.getElementById('header')
  this.scrollY >= 50 ? header.classList.add('scroll-header')
    : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)



var swiper = new Swiper(".review-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 2500,
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

var swiper = new Swiper(".blog-slider", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1024: {
          slidesPerView: 3,
          spaceBetween: 20,
    },
    768: {
          slidesPerView: 2,
          spaceBetween: 20,
    },
    640: {
          slidesPerView: 1,
          spaceBetween: 10,
    },
    320: {
          slidesPerView: 1,
          spaceBetween: 10,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// change password icon js
$(".toggle-password").click(function() {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
      input.attr("type", "text");
  } else {
      input.attr("type", "password");
  }
});

$(".toggle-password-re-enter").click(function() {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
      input.attr("type", "text");
  } else {
      input.attr("type", "password");
  }
});

$(".toggle-password-one").click(function() {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
      input.attr("type", "text");
  } else {
      input.attr("type", "password");
  }
});

$(".toggle-password-re-enter-one").click(function() {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
      input.attr("type", "text");
  } else {
      input.attr("type", "password");
  }
});


function base_url(string) {
  return base_url + string;
}

// This is for active class on the menu
var base_url = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
if (base_url == "index.html") {
  $("#home").addClass("active");
}
if (base_url == "about-us.html") {
  $("#about").addClass("active");
}
if (base_url == "services.html") {
  $("#services").addClass("active");
}
if (base_url == "service-details.html") {
  $("#services").addClass("active");
}
if (base_url == "blogs.html") {
  $("#blogs").addClass("active");
}
if (base_url == "blog-details.html") {
  $("#blogs").addClass("active");
}
if (base_url == "contact-us.html") {
  $("#contact").addClass("active");
}
if (base_url == "sign-in.html") {
  $("#sign-in").addClass("active");
}
if (base_url == "sign-up.html") {
  $("#sign-up").addClass("active");
}


// This is for animationn of the numbers
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

   
    const increment = target / 200;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 10);
    } else {
      counter.innerText = target.toLocaleString();
    }
  };

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      updateCount();
      observer.disconnect(); 
    }
  });

  observer.observe(counter);
});



