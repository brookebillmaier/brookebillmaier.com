window.onload = function () {

//Accordian - resume section
  var acc = document.getElementsByClassName("accordion");
  var i;
  console.log(acc)
  for (i = 0; i < acc.length; i++) {
    console.log(i)
      acc[i].addEventListener("click", function() {
        console.log("accordion clicked")
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.display === "block") {
              panel.style.display = "none";
          } else {
              panel.style.display = "block";
          }
      });
  }



//need to load barchart on view/scroll rather than page load

// barchart


// Construct options first and then pass it as a parameter
var options1 = {
	animationEnabled: true,
  animationDuration: 4000,
	title: {
		text: "SKILLS"
	},
	data: [{
		type: "bar", //change it to line, area, bar, pie, etc
		legendText: "SKILLS/APPLICATIONS",
		showInLegend: false,
   		color: "#e65760",
		dataPoints: [
      { label: "Java", y: 75},
			{ label: "Git/Github", y: 65},
			{ label: "SQL", y: 70 },
      { label: "Oracle", y: 70 },
			{ label: "jQuery", y: 30 },
			{ label: "MongoDB", y: 45 },
			{ label: "Angular", y: 50 },
			{ label: "React", y: 35 },
			{ label: "HTML/CSS/Sass", y: 65 },
			{ label: "Ruby", y: 40 },
			{ label: "Javascript", y: 30 }
			],

		}]

};

$("#resizable").resizable({
	create: function (event, ui) {
		//Create chart.
		$("#chartContainer1").CanvasJSChart(options1);
	},
	resize: function (event, ui) {
		//Update chart size according to its container size.
		$("#chartContainer1").CanvasJSChart().render();
	 }
  });

}

// nav bar trigger




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
//moving navbar menuicon
  // function myFunction(x) {
  //     x.classList.toggle("change");
  // }
  //
  // $(document.ready(function myFunction(){
  //     $('.menuicon').click(function(){
  //       $('ul').toggleClass('change');
  //     })
  //   })
  // )
