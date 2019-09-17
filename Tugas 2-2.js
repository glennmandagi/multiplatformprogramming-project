var scoreJohn = (189 + 120 + 103) / 3;
var scoreMike = (129 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;

console.log(scoreJohn, scoreMike, scoreMary)

if(scoreJohn > scoreMike && scoreJohn < scoreMary){
	console.log ('John\'s team win with score ' + scoreJohn);
}else if(scoreMike < scoreJohn && scoreMike > scoreMary){
	console.log ('Mike\'s team win with score ' + scoreMike);
}else if(scoreMary > scoreJohn && scoreMary > scoreMike){
	console.log ('Mary\'s team win with score ' + scoreMary);
}else {
	console.log('There is a draw');
}