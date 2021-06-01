var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000);
}

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