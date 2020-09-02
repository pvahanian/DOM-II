// Your code goes here

const navLogo = document.querySelector(".logo-heading"); // add pointer cursor for mouse over
const mainNav = document.querySelector(".main-navigation"); //take top of page for keypress up arrow
const introSec = document.querySelector(".main-navigation"); //make sky color navbar for wheel up use
const buttonHolder = document.querySelector(".btn"); // scale transtion  
const bodyHolder = document.querySelector("body"); // change font
const bodyScroll = document.querySelector("body"); // change background color
const mainText = document.querySelector(".text-content"); // were going to pull the h2s kids outta this and remove images on the page if any are selected
const footerText = document.querySelector("footer");  //make sky color for footer.
const forms = document.querySelector("form");  //make sky color for footer.
const images = document.querySelectorAll(".img-content");//images get removed on drag and drop.
const password = document.querySelector('input[type="password"]'); //images get removed on drag and drop.
const text = document.querySelector('input[type="password"]'); //images get removed on drag and drop.


document.addEventListener('mouseover', function (event){
  if(event.target === forms){
    forms.style.margin= "1% 50%";
  }
});

document.addEventListener('keydown', function (event){
    if(event.key==='ArrowUp')
    scrollToTop();
});

window.addEventListener('load', function (event){
  alert("Page Loaded")
});

window.addEventListener('wheel', function(event){
  introSec.style.backgroundColor= 'skyblue';
})

password.addEventListener('focus', function(event){
    password.style.backgroundColor = 'skyblue';
}) 

password.addEventListener('blur', (event) => {
  event.target.style.background = '';    
});

window.addEventListener('resize',function (event){
  navLogo.textContent="Dont Resize me!"
});

window.addEventListener('scroll', function(event){
bodyScroll.style.backgroundColor= "green";
});

buttonHolder.addEventListener('click', function(event){
  bodyScroll.style.backgroundColor= "yellow";  
});

images[0].addEventListener('dblclick', function(event){
  bodyScroll.style.backgroundColor= "salmon";  
});
images[1].addEventListener('dblclick', function(event){
  bodyScroll.style.backgroundColor= "salmon";  
});



function scrollToTop() { 
  window.scrollTo(0, 0); 
} 