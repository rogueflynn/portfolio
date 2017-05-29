$(document).ready(function() {
	var imgOneActive = false;
	var imgTwoActive = false;
	var imgThreeActive = false;
	//Animate first image
	$("#imgOneLink").click(function() {
		if(imgOneActive && !imgTwoActive) {
			imgOneNotFocus();
		} else {
			imgOneFocus();
		}
	});

	//Animate second image
	$("#imgTwoLink").click(function() {
		if(imgTwoActive) {
			imgTwoNotFocus(); 
		} else {
			imgTwoFocus(); 
		}
	});

	//Animate third image
	$("#imgThreeLink").click(function() {
		if(imgThreeActive) {
			imgThreeNotFocus();
		} else {
			imgThreeFocus();
		}
	});

	$("#backBtn").click(function() {
		if(imgOneActive && !imgTwoActive) {
			imgOneNotFocus();
		}
		if(imgTwoActive) {
			imgTwoNotFocus(); 
		}
		if(imgThreeActive) {
			imgThreeNotFocus();
		}
	});
	//Functions;
	function imgOneFocus() {
			$("#imgOne").animate({
				width: '200',
				height: 'auto',
				marginLeft: '-=270px'
			});
			$("#titleTwo").animate({
				opacity: '0.0'
			});
			$("#titleThree").animate({
				opacity: '0.0'
			});
			$("#imgTwo").animate({
				opacity: '0.0'
			});
			$("#imgThree").animate({
				opacity: '0.0'
			});
			$("#titleOne").animate({
				fontSize: '14px',	
				marginLeft: '+=270px',
				marginTop: '-=120px'
			});
			$("#descriptionOne").animate({
				marginLeft: '+=230px',
				marginTop: '-=120px',
				opacity: '1.0'
			});
			$("#descriptionOne").css("display", "inline");
			$("#imgTwoLink").css("display", "none");
			$("#imgThreeLink").css("display", "none");
			$("#backBtn").css("display", "inline");
			imgOneActive = true;

	}	
	function imgOneNotFocus() {
			$("#titleOne").animate({
				fontSize: '12px',	
				marginTop: '+=120px',
				marginLeft: '-=270px'
			});
			$("#imgOne").animate({
				width: '175',
				height: 'auto',
				marginLeft: '+=270px'
			});
			$("#imgTwo").animate({
				opacity: '1.0'
			});
			$("#imgThree").animate({
				opacity: '1.0'
			});

			$("#titleTwo").animate({
				opacity: '1.0'
			});
			$("#titleThree").animate({
				opacity: '1.0'
			});

			$("#descriptionOne").animate({
				marginLeft: '-=230px',
				marginTop: '+=120px',
				opacity: '0.0'
			});
			$("#descriptionOne").css("display", "none");
			$("#imgTwoLink").css("display", "inline");
			$("#imgThreeLink").css("display", "inline");
			$("#backBtn").css("display", "none");
			imgOneActive = false;

	}	
	function imgTwoFocus() {
			$("#imgTwo").animate({
				width: '200',
				height: 'auto',
				marginLeft: '-=270px'
			});
			$("#titleOne").animate({
				opacity: '0.0'
			});
			$("#titleThree").animate({
				opacity: '0.0'
			});
			$("#imgOne").animate({
				opacity: '0.0'
			});
			$("#imgThree").animate({
				opacity: '0.0'
			});
			$("#titleTwo").animate({
				fontSize: '14px',	
				marginTop: '-=120px',
				marginRight: '-=100px'
			});
			$("#descriptionTwo").animate({
				marginLeft: '+=230px',
				marginTop: '-=120px',
				opacity: '1.0'
			});
			$("#descriptionTwo").css("display", "inline");
			$("#imgOneLink").css("display", "none");
			$("#imgThreeLink").css("display", "none");
			$("#backBtn").css("display", "inline");
			imgTwoActive = true;
	}

	function imgTwoNotFocus() {
			$("#titleTwo").animate({
				fontSize: '12px',	
				marginTop: '+=120px',
				marginRight: '+=100px'
			});
			$("#imgOne").animate({
				opacity: '1.0'
			});
			$("#imgTwo").animate({
				width: '175',
				height: 'auto',
				marginLeft: '+=270px'
			});
			$("#imgThree").animate({
				opacity: '1.0'
			});

			$("#titleOne").animate({
				opacity: '1.0'
			});
			$("#titleThree").animate({
				opacity: '1.0'
			});

			$("#descriptionTwo").animate({
				marginLeft: '-=230px',
				marginTop: '+=120px',
				opacity: '0.0'
			});
			$("#descriptionTwo").css("display", "none");
			$("#imgOneLink").css("display", "inline");
			$("#imgThreeLink").css("display", "inline");
			$("#backBtn").css("display", "none");
			imgTwoActive = false;
	}

	function imgThreeFocus() {
			$("#imgThree").animate({
				width: '200',
				height: 'auto',
				marginLeft: '-=270px'
			});
			$("#titleTwo").animate({
				opacity: '0.0'
			});
			$("#titleOne").animate({
				opacity: '0.0'
			});
			$("#imgTwo").animate({
				opacity: '0.0'
			});
			$("#imgOne").animate({
				opacity: '0.0'
			});
			$("#titleThree").animate({
				fontSize: '14px',	
				marginRight: '+=50px',
				marginTop: '-=120px'
			});
			$("#descriptionThree").animate({
				marginLeft: '+=230px',
				marginTop: '-=120px',
				opacity: '1.0'
			});
			$("#descriptionThree").css("display", "inline");
			$("#imgTwoLink").css("display", "none");
			$("#imgOneLink").css("display", "none");
			$("#backBtn").css("display", "inline");
			imgThreeActive = true;

	}
	function imgThreeNotFocus() {
			$("#titleThree").animate({
				fontSize: '12px',	
				marginTop: '+=120px',
				marginRight: '-=50px'
			});
			$("#imgThree").animate({
				width: '175',
				height: 'auto',
				marginLeft: '+=270px'
			});
			$("#imgTwo").animate({
				opacity: '1.0'
			});
			$("#imgOne").animate({
				opacity: '1.0'
			});

			$("#titleTwo").animate({
				opacity: '1.0'
			});
			$("#titleOne").animate({
				opacity: '1.0'
			});

			$("#descriptionThree").animate({
				marginLeft: '-=230px',
				marginTop: '+=120px',
				opacity: '0.0'
			});
			$("#descriptionThree").css("display", "none");
			$("#imgTwoLink").css("display", "inline");
			$("#imgOneLink").css("display", "inline");
			$("#backBtn").css("display", "none");
			imgThreeActive = false;
	}
});
