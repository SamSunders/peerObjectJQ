//Utility function
//A simple random number generator
var rPerson = [];
var femaleNames = ["Amanda", "Bobbie", "Candy", "Donna", "Evie", "Faith", "Gwen", "Helga", "Izzy", "Jackie", "Kellie", "Lily", "Monica", "Nancy", "Olivia", "Petra", "Quinn", "Rain", "Silvia", "Tanya", "Ursala", "Vera", "Wendy", "Xena", "Yasmin", "Zelda"];
var maleNames = ["Allen", "Billy", "Carl", "Dan", "Eric", "Frank", "Gary", "Henry", "Isaiah", "Jack", "Kenny", "Luis", "Monty", "Nick", "Oliver", "Percival", "Quintin", "Ross", "Sam", "Troy", "Uther", "Victor", "Wallace", "Xavier", "Yollo", "Zach"];
var lastNames = ["Albert", "Beckum", "Castrel", "Donnovin", "Earnest", "Fruitwise", "Gallager", "Hotsause", "Iglu", "Jessarut", "Kerpatrick", "Lion", "Montan", "Nuru", "Octogamit", "Patric", "Quazious", "Ryan", "Sandstrom", "Talliver", "Ulyissus", "Viker", "Walker", "X", "Yansy", "Zaragoza"];

$(document).ready(function(){

	$("#randomize").on('click', function(event){
		var randomNameL = lastNames[Math.floor(Math.random()*lastNames.length)];
		rPerson[3] = gender(randomNumber(1, 2));
		rPerson[0] = nameGender() + " " + randomNameL;
		rPerson[1] = randomNumber(1, 100);
		rPerson[2] = randomNumber(1, 300);
		
		$("#outputPeople").children().remove(); $("#outputPeople1").children().remove(); $("#outputPeople2").children().remove(); $("#outputPeople3").children().remove();
		$("#outputPeople").prepend('<p>Name: ' + rPerson[0] +'</p>'); $("#outputPeople1").prepend('<p>Age: ' + rPerson[1] +'</p>'); $("#outputPeople2").prepend('<p>Weight: ' + rPerson[2] +' pounds</p>'); $("#outputPeople3").prepend('<p>Gender: ' + rPerson[3] +'</p>');
		
		
	}); // ends randomize
}); // end document ready

function gender(x){
		
			if (x === 2) {
				return "Male";
				
				
			} else {
				return "Female";
				
			}
	}
function nameGender(x){
	var randomNameF = femaleNames[Math.floor(Math.random()*femaleNames.length)];
	var randomNameM = maleNames[Math.floor(Math.random()*maleNames.length)];
	
		
	if(rPerson[3] === "Male"){
		rPerson[0] = randomNameM;
		return rPerson[0];
	}else {
		rPerson[0] = randomNameF;
		return rPerson[0];
	}
}
		


function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
} // end randomNumber


