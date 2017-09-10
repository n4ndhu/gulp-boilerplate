$(function(){
	$('#menuToggle').click(function(){
		$(this).toggleClass('active');
		$('body').toggleClass('body-lock');
	});
});
