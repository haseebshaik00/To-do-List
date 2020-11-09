$("ul").on("click", "li", function(){
	$(this).toggleClass("strike");
});

$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500, function()
		{
			$(this).remove();
		});
	e.stopPropagation();
});

$("input").on("keypress", function(e){
	if(e.which === 13)
	{
		var t = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash'></i></span>  " + t + "</li>");
	}
});

$(".fa-plus").on("click", function(){
	$("input").fadeToggle(200);	
});