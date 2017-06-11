$(document).ready(function() {
	if(window.outerWidth < 1004) {
		 $('.sidenav').css({"left" : "72.7%", "width" : "28%"});
		 $('.sidenav a').css({"padding" : "8px 8px 8px 15px", "font-size" : "170%"});
	} else {
		 $('.sidenav').css({"left" : "82.7%", "width": "18%"});
		 $('.sidenav a').css({"padding" : "8px 8px 8px 32px", "font-size" : "200%"});
	}

	document.getElementsByTagName("BODY")[0].onresize = function() {
		if(window.outerWidth < 1004) {
			 $('.sidenav').css({"left" : "72.7%", "width" : "28%"});
			 $('.sidenav a').css({"padding" : "8px 8px 8px 15px", "font-size" : "170%"});
		} else {
			 $('.sidenav').css({"left" : "82.7%", "width" : "18%"});
			 $('.sidenav a').css({"padding" : "8px 8px 8px 32px", "font-size" : "200%"});
		}
	}	
	$('#menuLink').click(function(e) {
		var $active = $('#menuActive'); 
		if($active.html() === "false") {
			$active.html("true");
			$('#mySidenav').css("height", "100%");
		} else {
			$active.html("false");
			$('#mySidenav').css("height", "0");
		}
	});
});
