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