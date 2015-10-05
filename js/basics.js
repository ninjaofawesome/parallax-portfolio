(function(){
  console.log('the basics have loaded');

  function displayMenu(){
    var bars = document.getElementsByClassName('menu-box');
    $(bars).click(function(){
      var menu = document.getElementsByClassName('menu-list');
      $(menu).slideToggle();
    });
  }

  displayMenu();
})();