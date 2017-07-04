$(document).ready(function() {
	//Animate first project 
	$("#imgOneLink").click(function() {
		displayProjectInfo(".projectOne", "Move It! Colors");
	});

	$("#imgTwoLink").click(function() {
		displayProjectInfo(".projectTwo", "OctoPlus");
	});

	$("#imgThreeLink").click(function() {
		displayProjectInfo(".projectThree", "STEMDash App");
	});

	$("#imgFourLink").click(function() {
		displayProjectInfo(".projectFour", "STEMDashWeb");
	});

	$("#imgFiveLink").click(function() {
		displayProjectInfo(".projectFive", "Nightmare of Frankie Stupidhead" );
	});

	$("#imgSixLink").click(function() {
		displayProjectInfo(".projectSix", "Breaking the Wall");
	});

	//Back Button
	$("#backBtn").click(function() {
		$(".projectThumbs").css("display", "block");
		$(".projectOne").css("display", "none");
		$(".projectTwo").css("display", "none");
		$(".projectThree").css("display", "none");
		$(".projectFour").css("display", "none");
		$(".projectFive").css("display", "none");
		$(".projectSix").css("display", "none");
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
