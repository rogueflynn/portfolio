$(document).ready(function() {
	var count = 0;
	var message = [ "P",
			"Pr",
			"Pro",
			"Prog",
			"Progr",
			"Progra",
			"Program",
			"Programm",
			"Programme",
			"Programmer<br/><br/>",
			"Programmer<br/><br/>D",
			"Programmer<br/><br/>De",
			"Programmer<br/><br/>Dev",
			"Programmer<br/><br/>Deve",
			"Programmer<br/><br/>Devel",
			"Programmer<br/><br/>Develo",
			"Programmer<br/><br/>Develop",
			"Programmer<br/><br/>Develope",
			"Programmer<br/><br/>Developer<br/><br/>",
			"Programmer<br/><br/>Developer<br/><br/>P",
			"Programmer<br/><br/>Developer<br/><br/>Pr",
			"Programmer<br/><br/>Developer<br/><br/>Pro",
			"Programmer<br/><br/>Developer<br/><br/>Prob",
			"Programmer<br/><br/>Developer<br/><br/>Probl",
			"Programmer<br/><br/>Developer<br/><br/>Proble",
			"Programmer<br/><br/>Developer<br/><br/>Problem",
			"Programmer<br/><br/>Developer<br/><br/>Problem S",
			"Programmer<br/><br/>Developer<br/><br/>Problem So",
			"Programmer<br/><br/>Developer<br/><br/>Problem Sol",
			"Programmer<br/><br/>Developer<br/><br/>Problem Solv",
			"Programmer<br/><br/>Developer<br/><br/>Problem Solve",
			"Programmer<br/><br/>Developer<br/><br/>Problem Solver"
		];

	var timer = setInterval(animateScreen, 80);

	function animateScreen() {
		if(count < 32) {
			$("#computerText").html(message[count]);
			count++;
		}
	}

});
