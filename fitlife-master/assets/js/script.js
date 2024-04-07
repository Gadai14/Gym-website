'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () { navbar.classList.toggle("active"); }

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () { navbar.classList.remove("active"); }

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header & back top btn active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


const scrollRevealOption = {
  distance: "20px",
  origin: "bottom",
  duration: 100,
};

ScrollReveal().reveal("#blog", {
  ...scrollRevealOption,
  
});


  
function Send(){

 
  var email = document.getElementById("Emai").value;


  var body = "<br/> Email : <br/>" + email+"<br/>Subscribed successfully your website";
 

  
  Email.send({
  Host : "smtp.elasticemail.com",
  Username : "biswajit1973.pal@gmail.com",
  Password : "730BAD6FB8D804574A62BBDB091FBD05950C",
  To : 'biswajit1973.pal@gmail.com',
  From : "biswajit1973.pal@gmail.com",
  Subject :"Newsletter Added",
  Body : body
}).then(
message => {
  if(message=='OK'){

      swal("Successfull", "Your Data Successfully Received", "success");
  }
  else {
                   swal("Something Wrong", "Your Data was not Received", "error");
  }
}
);
}
