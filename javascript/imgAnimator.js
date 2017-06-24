$(document).ready(function() {
	//Animate first project 
	$("#imgOneLink").click(function() {
		displayProjectInfo(".projectOne", "Nightmare of Frankie Stupidhead");
	});

	//Show second project 
	$("#imgTwoLink").click(function() {
		displayProjectInfo(".projectTwo", "Breaking the Wall");
	});

	//Animate third project 
	$("#imgThreeLink").click(function() {
		displayProjectInfo(".projectThree", "Basic Calculator Program");
	});

	//Back Button
	$("#backBtn").click(function() {
		$(".projectThumbs").css("display", "block");
		$(".projectOne").css("display", "none");
		$(".projectTwo").css("display", "none");
		$(".projectThree").css("display", "none");
		$("#backBtn").css("display", "none");
		$(".modal-title").html("Projects");
	});

	function displayProjectInfo(project, title) {
		$(".projectThumbs").css("display", "none");
		$(project).css("display", "inline");
		$("#backBtn").css("display", "inline");
		$(".modal-title").html(title);
	}
});
