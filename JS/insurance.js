function calculation() {
	var hp = Number(document.getElementById("horsepower").value);
	var age = Number(document.getElementById("age").value);
	var country = document.getElementById("country").value;
	var name = document.getElementById("name").value;
	var result = null;
	console.log(hp);
	console.log(age);
	console.log(country);

	if (country === 'Austria') {
		result = hp * 100 / age  + 50;
	}
	else if (country === 'Hungary') {
		result = hp * 120 / age + 100;
	}
	else {
		console.log('im here');
		result = (hp * 150 / ( age + 3)) + 50;
	}
	console.log(result);
	document.getElementById("printedCal").innerHTML = name + ", your insurance costs " + Math.ceil(result) + "€";
			
}
document.getElementById("calculateButton").addEventListener("click", calculation);