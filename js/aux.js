

// Booking widget

jQuery(document).ready(function() {
	jQuery('#bookWidget-36690-64319-0-1621105362').bookWidget({
		propid:64319,
		alignment:'center',
		availableColor:'#008000',
		availableBackgroundColor:'#90ee90',
		backgroundColor:'transparent',
		borderColor:'transparent',
		boxShadow:false,
		buttonBackgroundColor:'#41b941',
		buttonTitle:'Boka',
		dateSelection:1,
		defaultNightsAdvance:1,
		defaultNumAdult:2,
		defaultNumNight:2,
		formAction:'https://beds24.com/booking.php',
		formTarget:'_blank',
		fontSize:'16px',
		pastBackgroundColor:'#add8e6',
		pastColor:'#869497',
		peopleSelection:1,
		showLabels:false,
		unavailableColor:'#ff0000',
		unavailableBackgroundColor:'#ffc0cb',
		weekFirstDay:1,
		widgetLang:'sv',
		widgetType:'BookingStrip',
		width:'960px'
	});
});


// INDEX / HEM

// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 5000);
// }

// Property

function currentDiv1(n) {
	showDivs1(slideIndex = n);
  }
  
  function showDivs1(n) {
	var i;
	var x = document.getElementsByClassName("mySlides1");
	var dots = document.getElementsByClassName("demo1");
	if (n > x.length) {slideIndex = 1}
	if (n < 1) {slideIndex = x.length}
	for (i = 0; i < x.length; i++) {
	  x[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
	  dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
	}
	x[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " w3-opacity-off";
  }

// Studio small

function currentDiv2(n) {
	showDivs2(slideIndex = n);
  }
  
  function showDivs2(n) {
	var i;
	var x = document.getElementsByClassName("mySlides2");
	var dots = document.getElementsByClassName("demo2");
	if (n > x.length) {slideIndex = 1}
	if (n < 1) {slideIndex = x.length}
	for (i = 0; i < x.length; i++) {
	  x[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
	  dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
	}
	x[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " w3-opacity-off";
  }

// Studio Standard

function currentDiv3(n) {
	showDivs3(slideIndex = n);
  }
  
  function showDivs3(n) {
	var i;
	var x = document.getElementsByClassName("mySlides3");
	var dots = document.getElementsByClassName("demo3");
	if (n > x.length) {slideIndex = 1}
	if (n < 1) {slideIndex = x.length}
	for (i = 0; i < x.length; i++) {
	  x[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
	  dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
	}
	x[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " w3-opacity-off";
  }

// Studio Large

function currentDiv4(n) {
	showDivs4(slideIndex = n);
  }
  
  function showDivs4(n) {
	var i;
	var x = document.getElementsByClassName("mySlides4");
	var dots = document.getElementsByClassName("demo4");
	if (n > x.length) {slideIndex = 1}
	if (n < 1) {slideIndex = x.length}
	for (i = 0; i < x.length; i++) {
	  x[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
	  dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
	}
	x[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " w3-opacity-off";
  }


// VÅRA STUDIOS

// Studio Loft

function currentDiv5(n) {
	showDivs5(slideIndex = n);
  }
  
  function showDivs5(n) {
	var i;
	var x = document.getElementsByClassName("mySlides5");
	var dots = document.getElementsByClassName("demo5");
	if (n > x.length) {slideIndex = 1}
	if (n < 1) {slideIndex = x.length}
	for (i = 0; i < x.length; i++) {
	  x[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
	  dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
	}
	x[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " w3-opacity-off";
  }