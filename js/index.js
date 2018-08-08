$(document).ready(function () {

	$('#sidebarCollapse').on('click', function () {
		$('#sidebar').toggleClass('active');
		$('#content').toggleClass('sidebarActive');
		$('.hidden_toggle').toggleClass('hidden_on');
		$('.hidden_toggle2').toggleClass('hidden_on');
	});


});

// ----- Reset by method 1 -----
$('#reset1').on('click', function () {
  $('#form1')[0].reset();
});
$('#reset2').on('click', function () {
  $('#form2')[0].reset();
});




// Prevent from submiting the form
$('.form').on('submit', function () {
  event.preventDefault();
});
/*document.getElementById('form1').addEventListener('submit', function(event) {
  event.preventDefault();
});*/