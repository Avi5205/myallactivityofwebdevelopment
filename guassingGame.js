var secret = 4;

var guess = Number(prompt("Guess a number"));

if (guess===secret) {
	alert("YOU GOT IT!")
}

else if(guess > secret){
	alert("Too High! Try again");
}
else {
	alert("Too Low! Try again");
}