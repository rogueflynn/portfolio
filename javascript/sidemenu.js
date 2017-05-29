$(document).ready(function() {
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
