//INIT AOS ANIMATION LIBRARY
AOS.init();

//ANIMATION FUNCTION (5s)
function startAnimation(animationName, elementId) {
  const element = document.getElementById(elementId);
  if(element) {
    element.classList.add('animate__animated', animationName, 'animate__infinite');

    setTimeout(() => {
      element.classList.remove(animationName);
    }, 1000);
  }
}

setInterval(function() {
  startAnimation('animate__pulse', 'web-developer-title');
}, 5000);

setInterval(function() {
  startAnimation('animate__flash', 'andrei-dev-github');
}, 3000);


// MOBILE MENU

$(document).ready(function() {

  $("#hamburger-menu-button").click(function() {
      $("#mobile-menu-container").width("100%").show();
  });

  $("#closeMobileMenuButton").click(function() {
    $("#mobile-menu-container").width("0%");
  });

});