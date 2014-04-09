$(document).ready(function(){

	var showAlbum = function() {
		event.preventDefault();
		var $albumDiv = $("." + $(this).attr("rel"));

		if ($albumDiv.hasClass("show")) {
        	return;
      } else {
      		$albumDiv.siblings().removeClass("show");
        	$albumDiv.addClass("show");
      }



	};


$(".albumNav a").click(showAlbum);

	var zoomPic = function() {
		event.preventDefault();
		$(this).toggleClass("zoomedPic");
	};

$(".albums").on("click", "img", zoomPic);


































});