// // //console.log("Esselamu alejkum");
// // var firstName = "Malik";
// // console.log(firstName);

// // var lastName = "Lemes";
// // var age = 28;

// // var fullAge = true;
// // console.log(fullAge);

// // var job;
// // console.log(job);

// // job = "Teacher";
// // console.log(job);

// // var 3years = 3;//neispravno

// // var john/mark = 'john and mark'; //nesipravno

// /*******************
//  * Variable mutation and type coercion
//  */

// var firstName = "John"; //string
// var age = 20; //number
// //string //string //number
// //type coearcion
// console.log(firstName + " " + age); //string + string daju opet string

// var job, isMarried;
// job = "teacher";
// isMarried = false;

// console.log(
//   firstName + "is a " + age + " year old" + job + ".Is he married? " + isMarried
// );

// //variable mutation
// age = "twenty eight"; //pretvorili smo varijablu age u string
// job = "driver"; //a job je sada driver,a ne vise teacher

// alert(
//   firstName + "is a " + age + " year old" + job + ".Is he married? " + isMarried
// );

// var lastName = prompt("What is his last name");
// console.log(firstName + " " + lastName);

/*********************
 * basic operators
 */

var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

//math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

//typeof operator

console.log(typeof johnOlder); //typeof- daje nam informaciju koji je tip podataka
console.log(typeof ageJohn); //number
console.log(typeof "Mark is older"); //typeof - string
var x;
console.log(typeof x); //typeof -undefined

/*****************
 * operator precedence(prednost)
 */

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge; //true,zato sto znak - ima prednost nad znakom >=
console.log(isFullAge);

//grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2; //operator / ima prednost,ali ako stavimo zagrade ,onda ima prednost ono sto je u zagradi,kao u matematici
console.log(average);
