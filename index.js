let mobileMenu = document.querySelector('.mobile-menu');
let hamburger = document.querySelector('.fa-bars');
let close = document.querySelector('.fa-xmark');

//Toggle mobile nav from hamburger
close.style.display = 'none';
function toggle(){
    if(mobileMenu.style.display == 'none'){
        mobileMenu.style.display = 'block';
        hamburger.style.display = 'none';
        close.style.display = 'block';
    }
    else{
        mobileMenu.style.display = 'none';
        hamburger.style.display = 'block';
        close.style.display = 'none';
    }
}

//Hide mobile nav when link is clicked
function navMobile(){
    mobileMenu.style.display = 'none';
    close.style.display = 'none';
    hamburger.style.display = 'block';
}

//Hide mobile nav for responsive design
function navMobileHidden(x) {
    if (mediaScreen.matches) { // If media query matches
      mobileMenu.style.display = "none";
    } else {
        mobileMenu.style.display = "none";
    }
  }
  
  var mediaScreen = window.matchMedia("(max-width: 800px)")
  navMobileHidden(mediaScreen) // Call listener function at run time
  mediaScreen.addListener(navMobileHidden) // Attach listener function on state changes