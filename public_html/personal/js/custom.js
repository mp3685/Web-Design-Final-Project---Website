$(document).ready(function(){

	$("#mainPicture").click(function(){
		$(this).velocity("callout.shake");
	});

	var clicked=true;

	$("#Surprise").click(function(){
		if (clicked){
				$("#Surprise").html("HAHA, you clicked me! Congrats!");
				$("#Surprise").css("padding", "20px");
				clicked=false;
			
		}else{
			$("#Surprise").html("RANDOM COLORS!!!!");
			$("#Surprise").css("padding", "20px");
			$("#Surprise").css("background-color", "rgb("+ Math.floor(Math.random() * 256)+","+Math.floor(Math.random() * 256)+","+Math.floor(Math.random() * 256) )+")";
		}
	});

});

/*$("h1").css("background-color", "#0f0"); - example*/