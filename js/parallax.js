$(document).ready(function(){
  console.log('parallax loaded');

  $('div[data-type="background"]').each(function(){
    $(window).scroll(function(){
      var backgroundObj = $(this);
      var yPosition = -(window.scrollTop() / backgroundObj.data('speed'));
      var coordinates = '50% '+ yPosition + 'px';

      backgroundObj.css({ backgroundPosition: coordinates });
    });
  });

});