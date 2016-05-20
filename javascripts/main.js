$(document).on('click',function(){
	$('.collapse').collapse('hide');
})

$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});