const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navBarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click" , ()=>{
	navBarLinks.classList.toggle("active");
})

var slideIndex = 1;
var slideIndex2 = 1;
showSlides(slideIndex);
showSlides2(slideIndex2);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function plusSlides2(n) {
  showSlides2(slideIndex += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex = n);
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("dot2");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active2", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex2-1].className += " active";
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active2", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//Explore hover Effects 
const exploreDesc0 = document.getElementsByClassName("exploreDesc")[0];
const exploreDesc1 = document.getElementsByClassName("exploreDesc")[1];
const exploreDesc2 = document.getElementsByClassName("exploreDesc")[2];
const characters = document.getElementsByClassName("characters")[0];
const weapons = document.getElementsByClassName("weapons")[0];
const places = document.getElementsByClassName("places")[0];

characters.addEventListener("mouseover", ()=>{
	exploreDesc0.classList.add("exploreDesc2");
})

characters.addEventListener("mouseout", ()=>{
	exploreDesc0.classList.remove("exploreDesc2");
})


weapons.addEventListener("mouseover", ()=>{
	exploreDesc1.classList.add("exploreDesc2");
})

weapons.addEventListener("mouseout", ()=>{
	exploreDesc1.classList.remove("exploreDesc2");
})

places.addEventListener("mouseover", ()=>{
	exploreDesc2.classList.add("exploreDesc2");
})

places.addEventListener("mouseout", ()=>{
	exploreDesc2.classList.remove("exploreDesc2");
})







