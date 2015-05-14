$(document).ready(function(){
  console.log('parallax loaded');

  $('div[data-type="background"]').each(
    var backgroundObj = $(this);
    $(window).scroll(function(){
      var yPosition = -(window.scrollTop() / backgroundObj.data('speed'));
      var coordinates = '50% '+ yPosition + 'px';

      backgroundObj.css({ backgroundPosition: coordinates });
    });
  );

});