// <!-- modal script -->
function login() {
  document.getElementById('content3').style.display = "none"
  document.getElementById('content4').style.display = "none"


}
function email() {
  document.getElementById('content').style.display = "block"
  document.getElementById('content2').style.display = "block"
  document.getElementById('content3').style.display = "none"
  document.getElementById('content4').style.display = "none"
}
function otp() {
  document.getElementById('content').style.display = "none"
  document.getElementById('content2').style.display = "none"
  document.getElementById('content3').style.display = "block"
  document.getElementById('content4').style.display = "block"

}
// aos initalize
AOS.init({
  duration: 1000,
});

// offer-carousel
$('#offer-scroll .owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  // nav:true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 4
    }
  }
})
// gromming

function mengromming() {
  document.getElementById('serviceboxwomen').style.display = "none"
  document.getElementById('serviceboxmen').style.display = "flex"
}
function womengromming() {
  document.getElementById('serviceboxwomen').style.display = "flex"
  document.getElementById('serviceboxmen').style.display = "none"
}

// service-scroll

var splide = new Splide('.splide', {
  perPage: 4,
  gap: '1.5rem',
  type: 'loop',
  perMove: 1,
  drag: 'free',
  snap: true,
  padding: '1.5rem',

  autoplay: true,
  autoplayTimeout: 1000,
  pagination: false,
  breakpoints: {

    830: {
      perPage: 3,
      gap: '.7rem',
      padding: '0',
      arrows: false,
    },

    640: {
      perPage: 2,
      gap: '.7rem',
      padding: '0',

    },
    480: {
      perPage: 1,
      gap: '.7rem',
      padding: '2rem',
    },
    0: {
      perPage: 1,
      gap: '.7rem',
      padding: '2rem',
    },
  },
});

splide.mount();


// user-review

$('#review-user .owl-carousel').owlCarousel({
  loop: true,
  margin: 10,

  // nav:true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 4
    },
  }
})

var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.customNextBtn').click(function() {
  owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn').click(function() {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  owl.trigger('prev.owl.carousel', [300]);
})

// search bar
let list = document.querySelector('.list')

document.querySelector('#search').onclick = () => {
  list.classList.toggle('active')
}