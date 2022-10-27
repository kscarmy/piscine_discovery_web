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
		if (left == 0 || right == 0){
			console.log("It's over 9000!");
			alert("It's over 9000!");
			return;
		}
		ret = Number(left) / Number(right);	}
	if (operator == "%"){
		console.log("%");
		if (left == 0 || right == 0){
			console.log("It's over 9000!");
			alert("It's over 9000!");
			return;
		}
		ret 
		ret = Number(left) % Number(right);	}
	
	console.log("ret ", ret);
	alert(ret);
	// document.getElementById("res").innerHTML = ret;
}

function repeat() {


	alert("Plase, use me...");
    setTimeout(repeat, 30000);
}
