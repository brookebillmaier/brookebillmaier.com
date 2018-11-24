
  //Accordian - resume section
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.display === "block") {
              panel.style.display = "none";
          } else {
              panel.style.display = "block";
          }
      });
  }






  // Sticky Navbar Functionality
  $(document).ready(function(){
    // Even when the window is resized, run this code.
    $(window).resize(function(){
      // Variables
      var windowHeight = $(window).height();
      var ninetypercent = .9 * windowHeight;
      $(document).scroll(function(){
        var y = $(this).scrollTop();
        if( y > ninetypercent) {
          $('nav').fadeIn("slow").addClass('sticky');
        } else {
          $('nav').removeClass('sticky');
        }
      });
    }).resize();
  });


  function myFunction(x) {
      x.classList.toggle("change");
  }

  $(document.ready(function myFunction(){
      $('.menuicon').click(function(){
        $('ul').toggleClass('change');
      })
    })
  )
