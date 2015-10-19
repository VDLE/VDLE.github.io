$(document).ready(function(){
    $(".nav-choice").click(function(){
		if($(".submenu").hasClass("deploy")){
			$(".submenu").removeClass("deploy");
		}
		else{
			$(".submenu").addClass("deploy");
		}
    });
	
	$(".name").click(function () {
			//stuff to do on mouse enter
			if($(".content").hasClass("off")){
				$(".content").css("bottom","5%");
				$(".name").css("top","20%");
				$(".content").removeClass("off");
			}
			//stuff to do on mouse leave
			else{
				$(".content").css("bottom","-100%");
				$(".name").css("top","75%");
				$(".content").addClass("off");
			}
	});
});