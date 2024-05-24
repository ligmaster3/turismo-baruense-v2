$(document).ready(function () {
  $(window).scroll(function () {
      if ($(window).scrollTop() > 0.7 * $(window).height()) {
          $("#navbar").addClass("sticky-nav"); // Add the class to change the color
      } else {
          $("#navbar").removeClass("sticky-nav"); // Remove the class to revert the color
      }
  });
});