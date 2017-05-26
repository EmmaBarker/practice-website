$(".thumbnail").hide().show("slow");

//Features page hide intro paragraph
$(".intro p").hide();
$(".intro").append("<button class =\"btn btn-default\">Read more</button>")
$(".intro button").click(function(){
	$(this).prev().show()
	$(this).remove();
});



var $overlay = $("<div id='overlay'></div>");
var $image = $("<img>");
var $caption = $("<p></p>")

$overlay.append($image);
$overlay.append($caption);

$("#imageGallery").append($overlay);

$("#imageGallery a").click(function(event){
	event.preventDefault();
	var imageLocation = $(this).attr("href");
	$image.attr("src", imageLocation);
	$overlay.show();

	var captionText = $(this).children("img").attr("alt");
	$caption.text(captionText);
});

$overlay.click(function(){
	$(this).hide();

});


