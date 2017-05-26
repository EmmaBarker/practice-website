$(".thumbnail").hide().show("slow");

//Features page hide intro paragraph
$(".intro p").hide();
$(".intro").append("<button class =\"btn btn-default\">Read more</button>")
$(".intro button").click(function(){
	$(this).prev().show()
	$(this).remove();
});