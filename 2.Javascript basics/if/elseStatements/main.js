/***************
 * if/ else statements
 */

var firstName = "John";
var civilStatus = "single";

if (civilStatus === "married") {
  console.log(firstName + " is married!");
} else {
  console.log(firstName + " will hopefully marry soon .");
}

//drugi nacin uporedivanja

var isMarried = true;
if (isMarried) {
  console.log(firstName + " is married!");
} else {
  console.log(firstName + " will hopefully soon.");
}

//jos jedan nacin rjesavanja codingChallenge1

var johnHeight = 1.85;
var johnMass = 85;

var markHeight = 1.7;
var markMass = 60;

var bmiJohn = johnMass / (johnHeight * johnHeight);
var bmiMark = markMass / (markHeight * markHeight);

if (bmiJohn > bmiMark) {
  console.log("Johns BMI is higher than Marks.");
} else {
  console.log("Marks BMI is higher than Johns.");
}
