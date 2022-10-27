

function balloonUp(){

	let balloon = document.getElementById("balloon");
	let background = window.getComputedStyle(balloon).backgroundColor;
	let height = balloon.offsetHeight;
	let width = balloon.offsetWidth;

	if (background == "rgb(255, 0, 0)")
		balloon.style.backgroundColor = "rgb(0, 255, 0)";
	else if (background == "rgb(0, 255, 0)")
		balloon.style.backgroundColor = "rgb(0, 0, 255)";
	else if (background == "rgb(0, 0, 255)")
		balloon.style.backgroundColor = "rgb(255, 0, 0)";
	if (height < 420 && width < 420){
		balloon.style.height = 	height + 10 + "px";
		balloon.style.width = 	width + 10 + "px";	}
	else{
		balloon.style.height = 200 + "px";
		balloon.style.width = 200 + "px";
	}
}

function balloonDown(){

	let balloon = document.getElementById("balloon");
	let background = window.getComputedStyle(balloon).backgroundColor;
	let height = balloon.offsetHeight;
	let width = balloon.offsetWidth;

	if (background == "rgb(255, 0, 0)")
		balloon.style.backgroundColor = "rgb(0, 0, 255)";
	else if (background == "rgb(0, 255, 0)")
		balloon.style.backgroundColor = "rgb(255, 0, 0)";
	else if (background == "rgb(0, 0, 255)")
		balloon.style.backgroundColor = "rgb(0, 255, 0)";
	if (height > 200 && width > 200){
		balloon.style.height = 	height - 10 + "px";
		balloon.style.width = 	width - 10 + "px";	}
}