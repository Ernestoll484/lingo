var currentWord; 
var solution;
var answer = [];
var currentRow = 0; 

generateWord(); 

function generateWord() { 
	currentWord = words[Math.floor(Math.random() * words.length)];
	solution = currentWord.split(""); 
	console.log(currentWord);
	document.getElementById("letter" + currentRow + "_0").innerHTML = currentWord[0]; 
}

function keyActivity(event) { 
	var inp = document.getElementById("textInput").value;
	var pressedKey = event.key; 

	if (pressedKey == "Enter" && inp.length == 5) { 
		checkAnswer();
	} else if (pressedKey == "Enter" && inp.length < 5) { 
		alert("It has to be a 5-letter word, try again");
	} else if (pressedKey.length == 1) { 
		if (inp.length < 5) {
			answer[inp.length] = pressedKey; 
		}
		console.log(answer);
		document.getElementById(("letter" + currentRow + "_" + inp.length)).innerHTML = pressedKey; 
	}
}

function checkAnswer() { 
	var inp = document.getElementById("textInput").value; 
	if (inp != currentWord) { 
		for (var i = 0; i < answer.length; i++) { 
			var letter = document.getElementById(("letter" + currentRow + "_" + i)); 
			if (answer[i] == solution[i]) { 
				letter.style.backgroundColor = "green";
				letter.style.borderRadius = "0px";
			} else if (currentWord.indexOf(answer[i]) >= 0) { 
				letter.style.backgroundColor = "yellow";
				letter.style.borderRadius = "45px";
			} else { 
				letter.style.backgroundColor = "red";
			}
		}
		
		if (currentRow >= 4) { 
			setTimeout(function() {alert("You have no more lines left, so you lost! The correct word was: " + currentWord); reset();}, 10);
		} else { 
			nextLine();
		} 
	} else { 
		for (var i = 0; i < answer.length; i++) {
			var letter = document.getElementById(("letter" + currentRow + "_" + i));
			letter.style.backgroundColor = "green";
			letter.style.borderRadius = "0px";
		}
		setTimeout(function() {alert("Congratulation, you have won!"); reset();}, 10);
	}
}

function nextLine() { 
	currentRow += 1; 
	document.getElementById("textInput").value = ""; 
	document.getElementById("letter" + currentRow + "_0").innerHTML = currentWord[0];
}

function reset() { 
	for (var i = 0; i < 5; i++) { 
		for (var x = 0; x < 5; x++) { 
			var letter = document.getElementById("letter" + i + "_" + x); 
			letter.innerHTML = "";
			letter.style = "";
		}
	}
	document.getElementById("textInput").value = "";
	answer = []; 
	currentRow = 0; 
	generateWord(); 
}  