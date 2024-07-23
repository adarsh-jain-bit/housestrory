// plumber popup

var card = document.getElementById("card")
window.addEventListener("load",function(){
  setTimeout(
    function open(event){
      document.querySelector(".cardwrapper").style.display = "block";
      
    }, 2000
    )
  })
  window.onclick = function(event) {
    if (event.target == card) {
      card.style.display = "none";
      
      
    }
    else{
      document.body.style.overflow = "scroll";
      
   
    
  }
}

window.addEventListener("load",function(){
  setTimeout(
    function open(event){
      document.querySelector(".spinnerwrapper").style.display = "none"
    },2000
  )
})
document.querySelector('#closebtn').addEventListener("click",function(){
  document.querySelector(".cardwrapper").style.display = "none"
 
})
// aos initalize
AOS.init({
  duration:1000,
});
