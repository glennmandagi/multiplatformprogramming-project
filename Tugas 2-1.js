var scoreJohn = (189 + 120 + 103) / 3;
var scoreMike = (129 + 94 + 123) / 3;

console.log(scoreJohn, scoreMike)

if(scoreJohn > scoreMike){
	console.log ('John\'s team win with score ' + scoreJohn);
}else if(scoreMike < scoreJohn){
	console.log ('Mike\'s team win with score ' + scoreMike);
}else{
	console.log('There is a draw');
}
