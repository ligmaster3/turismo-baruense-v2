$(document).ready(function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 0.7 * $(window).height()) {
        $("#navbar").addClass("sticky-nav"); // Reemplaza 
      } else {
        $("#navbar").removeClass("sticky-nav"); // Elimina 
       
      }
    });
  });