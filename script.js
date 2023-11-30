function jqUpdateSize(){
    // Get the dimensions of the viewport
    // var width = $(window).width();
    var height = $(window).height();
  
    // $('#jqWidth').html(width);
    $('#jqHeight').html(height);
  
    $('.header').css({ 
    height:  $(window).height(),
    overflow:" hidden"});
  
  }
  $(document).ready(jqUpdateSize);    // When the page first loads
  $(window).resize(jqUpdateSize);     // When the browser changes size



  $(window).scroll(function() {
    if ($(this).scrollTop() > 150){  
        $('.header-inner').addClass("borderClass");
        // $('.get-in-touch').addClass("borderColor");
    }
    else{
        $('.header-inner').removeClass("borderClass");
        // $('.get-in-touch').removeClass("borderColor");
    }
});


function activeTab(evt, id) {
           
    // Get all elements with class="tablinks" and remove the class "active"
     let tabactive = document.getElementsByClassName("TabButtonSelected");
     tabactive[0].className = tabactive[0].className.replace(" TabButtonSelected", "");

     document.getElementById(id).style.display = "block";
     evt.currentTarget.className += " TabButtonSelected";

     displaySection(evt,id)
 }
 
function displaySection(evt, id) {

     let tabactive = document.getElementsByClassName("tab-section");
     tabactive[0].className = tabactive[0].className.replace(" d-chart-show", "d-chart-n");
     // add below line of codes
     [...document.querySelectorAll('div.tab-section')].forEach(item => item.style.display='none')
     document.getElementById("Section" + id).style.display = "block";
     evt.currentTarget.className += " d-chart-show";

}

// modal code

var modal = document.querySelector(".modal-div");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);




// scroll fade effects

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 60;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);


  window.onload=()=>{
    const $ = document.querySelector.bind(document);
const $All = document.querySelectorAll.bind(document);

$('#menu').onclick=()=>{              
  $('#menu').classList.toggle('rotate')
  $('.nav-page1').classList.toggle('transform')
  $('.menu-line1').classList.toggle('rotate1')
   $('.menu-line2').classList.toggle('rotate2')
}
}
