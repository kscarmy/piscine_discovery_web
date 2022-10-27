function calcs(){
	var left = document.getElementById("left").value;
	var right = document.getElementById("right").value;
	let e = document.getElementById("operator");
	var operator = value = e.options[e.selectedIndex].value;

	let ret = 0;
	console.log("left ", left, " right ", right);
	if (left < 0){
		console.log("Error:(", left,") not >= 0");
		return;	}
	if (right < 0){
		console.log("Error:(", right,") not >= 0");
		return;	}
	if (operator == "+"){
		console.log("+");
		ret = Number(left) + Number(right);	}
	if (operator == "-"){
		console.log("-");
		ret = Number(left) - Number(right);	}
	if (operator == "*"){
		console.log("*");
		ret = Number(left) * Number(right);	}
	if (operator == "/"){
		console.log("/");
		ret = Number(left) / Number(right);	}
	if (operator == "%"){
		console.log("%");
		ret = Number(left) % Number(right);	}
	
	console.log("ret ", ret);
	document.getElementById("res").innerHTML = ret;
}
