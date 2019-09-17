/*
var firstName= 'John';
console.log(firstName);
var lastName= 'Doe';
console.log(lastName);
var age= 21;
console.log(age);
var isMarried= true;
console.log(isMarried);
var status;
console.log(status);
*/


/*
* Variable mutation and type coersion
*/
/*
//Type Coersion
var firstName= 'John';
var age= 28;
console.log(firstName + ' ' + age);

var job= 'teacher';
var isMarried= false;
console.log(firstName + ' is a ' + age + ' year old ' + ' is he married? ' + isMarried);

//Variable mutation
age= 'twenty eight';
job= 'driver';
alert(firstName + ' is a ' + age + ' year old ' + ' is he married? ' + isMarried);
var lastName= prompt('What is his last name? ');
console.log(firstName + ' ' + lastName);
*/


/*
* Basic Operators
*/
/*
var now, ageJohn, ageMark, yearJohn, yearMark;

now= 2019;
ageJohn= 28;
ageMark= 33;

yearJohn= now - ageJohn;
yearMark= now - ageMark;
console.log(yearJohn, yearMark);

//Relational Operator
var markOlder= ageJohn < ageMark;
console.log(markOlder);

//typeof operator
console.log(typeof markOlder);
console.log(typeof now);
console.log(typeof 'John and Mark');
var x;
console.log(typeof x);
*/

/*
* Operator Precedence
*/
//var now= 2019;
//var yearJohn= 1989;
//var fullAge= 17;

//Multiple operators
//var isFullAge= now - yearJohn >= fullAge;
//console.log(isFullAge);

//Grouping
//var ageJohn= now -yearJohn;
//var ageMark= 35;

//var average= (ageJohn + ageMark) / 2;
//console.log(average);
//var x, y;
//x= y= (3 + 5) * 4 - 6;
//console.log(x, y);

//more
//x= x * 2;
//x *= 2;

/* 
* If/Else Statement 
*/


//var firstName = 'John';
//var status = 'Single';

//if(status === 'Married'){
	//console.log(firstName + ' is married');
//}else{
	//console.log(firstName + ' will hopefully marry soon')
//}

//var isMarried = true;

//if(isMarried){
	//console.log(firstName + ' is married');
//}else{
	//console.log(firstName + ' will hopefully marry soon')
//}


/*
* Boolean Logic (AND, OR, NOT)
*/

// var firstName = 'John';
// var age = 20;

// if(age < 13){
	// console.log(firstName + ' is a boy');
//} else if(age >= 13 && age < 20){
	// console.log(firstName + ' is a teenager');
// } else if(age >= 20 && age < 30){
	// console.log(firstName + ' is a young man');
// } else{
	// console.log(firstName + ' is a man');
// }

/*
* The Ternary Operator and Switch statement 
*/

/*
var firstName = 'John';
var age = 10;

// Ternary Operator
age >= 10 ? console.log(firstName + ' drinks juice')
: console.log(firstName + ' drinks milk');

var drink = age >=10 ? 'juice' : 'milk';
console.log(drink)

// Switch Statement
var job = 'Teacher';

switch(job){
	case 'Lecturer':
	case 'Instructor':
	case 'Teacher':
		console.log(firstName + ' is a teacher and instructor');
		break;
	case 'Driver':
		console.log(firstName + ' is a driver');
		break;
	case 'Designer':
		console.log(firstName + ' is a designer');
		break;
	default:
		console.log(firstName + ' does something else');
}

age = 20;
switch(true){
	case age < 13:
		console.log(firstName + ' is a boy');
		break;
	case age >= 13 && age < 20:
		 console.log(firstName + ' is a teenager');
		 break;
	case age >= 20 && age < 30:
		 console.log(firstName + ' is a young man');
		 break;
	default:
		console.log(firstName + ' is a man');
}
*/

/*
var john1, john2, john3, javerage;
var mike1, mike2, mike3, maverage;

john1 = 89;
john2 = 120;
john3 = 103;
javerage = (john1 + john2 + john3) / 3;

mike1 = 116;
mike2 = 94;
mike3 = 123;
maverage = (mike1 + mike2 + mike3) / 3;

console.log("John average point is = ", javerage);
console.log("Mikel average point is = ", maverage);

if (javerage > maverage){
	console.log("John's Team has the higher points with the average of " + javerage);
}

else if(javerage == maverage){
	console.log("John's and Mikel's Team has the same average points, both them are = " + javerage);
}

else{
	console.log("Mikel's Team has the higher points with the average of " + maverage);
}
*/

/*
var john1, john2, john3, javerage;
var mike1, mike2, mike3, maverage;
var mary1, mary2, mary3, raverage;

john1 = 89;
john2 = 120;
john3 = 103;
javerage = (john1 + john2 + john3) / 3;

mike1 = 116;
mike2 = 94;
mike3 = 123;
maverage = (mikel1 + mikel2 + mikel3) / 3;

mary1 = 97;
mary2 = 134
mary3 = 105;
raverage = (mary1 + mary2 + mary3) / 3;

console.log("John average point is = ", javerage);
console.log("Mikel average point is = ", maverage);
console.log("Mary average point is = ", raverage);

if (javerage > maverage && javerage > raverage){
	console.log("John's Team has the higher points with the average of " + javerage);
}

else if(javerage == maverage && raverage < raverage){
	console.log("Mikel's Team has the same average points, both them are " + maverage);
}

else if(raverage > javerage && raverage > maverage){
	console.log("Mary's Team has the higher points with the average of " + raverage);
}

else if(javerage == maverage && javerage == raverage){
	console.log("John's and Mikel's Team has the same average points, both them are " + javerage);
}
*/

/*
var scoreJohn = (189 + 120 + 103) / 3;
var scoreMike = (129 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;

console.log(scoreJohn, scoreMike, scoreMary)

if(scoreJohn > scoreMike){
	console.log ('John\'s team win with score ' + scoreJohn);
}else if(scoreMike < scoreJohn){
	console.log ('Mike\'s team win with score ' + scoreMike);
}else{
	console.log('There is a draw');
}

if(scoreJohn > scoreMike && scoreJohn < scoreMary){
	console.log ('John\'s team win with score ' + scoreJohn);
}else if(scoreMike < scoreJohn && scoreMike > scoreMary){
	console.log ('Mike\'s team win with score ' + scoreMike);
}else if(scoreMary > scoreJohn && scoreMary > scoreMike){
	console.log ('Mary\'s team win with score ' + scoreMary);
}else {
	console.log('There is a draw');
}
*/

//Falsy values : undefined, null, 0, '', NaN
//Truthy values : NOT falsy values
/*
var height = 0;

if(height || height === 0){
	console.log('Variable is defined');
}else{
	console.log('Variable is not defined');
}
*/

/* Functions in JavaScript */

/*
function calculateAge(birthYear){
	return 2019 - birthYear;
}

var ageJohn = calculateAge(1991);
var ageMark = calculateAge(1960);
var ageMike = calculateAge(1971);
console.log(ageJohn, ageMark, ageMike);

function yearUntilRetirement(year, firstName){
	var age = calculateAge(year);
	var retirement = 60 - age;
	if(retirement > 0){
		console.log(firstName + ' retires in ' + retirement + ' years');
	}else{
		console.log(firstName + ' is already retired');
	}
}

yearUntilRetirement(1987, 'John');
yearUntilRetirement(1946, 'Mark');
yearUntilRetirement(1971, 'Jane');
*/

/* Function Statements and Declarations */

/*
//function declaration
function whatDoYouDo(job, firstName){}

//function expression
var whatDoYouDo = function(job, firstName){
	switch(job){
		case 'teacher':
			return firstName + ' is a teacher';
		case 'driver':
			return firstName + ' is a driver';
		case 'designer':
			return firstName + ' is a designer';
		default:
			return firstName + ' does something else';
	}
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Mark'));
console.log(whatDoYouDo('retired', 'Mike'));
*/

/* Array */

//Initialise Array
/*
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names.length);

//Mutate Array Data
names[0] = 'Ben';
names[names.length] = 'Mary';
console.log(names);
*/

//Different Data Types

/*
var john = ['John', 'Smith', 1990, 'designer', false];
john.push('blue');
john.unshift('Mr');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);
*/

/*
function calculateAge(birthYear){
	return 2019 - birthYear;
}

var ages = [32+12, calculateAge(1987), calculateAge(1987)];

console.log(ages);
*/

//Exercise #2
/* John and his family went on a holiday and
	went to 3 different restaurants. The bills
	were $124, $48 and $268

	To tip the waiter a fair amount, John created 
	a simple tip calculator (as a function). He likes
	to tip 20% of the bill when the bill is less than
	$50, 15% when the bill is between $50 and $200, and
	10% if the bill is more than $200.

	In the end, John would like to have 2 arrays:
	1) Contaning all 43 tips (one for each bill)
	2) Containing all 3 final paid amounts (bill + tip)

	(NOTES: To calculate 20% of a value, simply
	multiply  it with 20/100 = 0.2)
*/

/* Object and Properties */

/*
var john = {
	firstName: 'John',
	lastName: 'Smith',
	birthYear: 1990,
	family: ['Jane', 'Mark', 'Bob', 'Emily'],
	job: 'driver',
	isMarried: false
}

console.log(john.firstName);
console.log(john.lastName);
console.log(john.family[3]);
console.log(john['birthYear']);
console.log(john['family'][1]);
var x = 'birthYear';
console.log(john[x]);

var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = '1969';
jane['lastName'] = 'Smith';
console.log(jane);
*/

/*Object and Methods */
/*
var john = {
	firstName: 'John',
	lastName: 'Smith',
	birthYear: 1990,
	family: ['Jane', 'Mark', 'Bob', 'Emily'],
	job: 'driver',
	isMarried: false,
	calcAge: function(birthYear){
		this.age = 2019 - this.birthYear;
		return this.age;
	}
}

var age = john.calcAge();
console.log(age);
console.log(john);
*/

/* Loop and iteration */
//For loop
/*
for(var i=0; i<10; i++){
	console.log(i);
}

var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for(var i=0; i<john.length; i++){
	console.log(john[i]);
}

var nama = 'John';
console.log(nama[0]+nama[1]+nama[2]+nama[3]+'s');
*/

//While loop
/*
var i = 0;
while(i<john.length){
	console.log(john[i]);
	i++;
}
*/

//Continue and Break Statement
/*
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for(var i=0; i<john.length; i++){
	if(typeof john[i] !== 'string'){
		continue;
	}
	console.log(john[i]);
}

for(var i=0; i<john.length; i++){
	if(typeof john[i] !== 'string'){
		break;
	}
	console.log(john[i]);
}
*/

//Looping backward
/*
for(var i=john.length-1; i>=0; i--){
	console.log(john[i]);
}
*/

/*
function palindrome(kata){
	var a1='';
	var a2='';
	for(var i=0;i<kata.length;i++){
		a1=kata[i];
	}
	for(var i=kata.length;i>=0;i--){
		a2=kata[i];
	}
	if(a1 === a2){
		return 'true';
	}else{
		return 'false';
	}

	console.log(palindrome('katak'));
}
*/