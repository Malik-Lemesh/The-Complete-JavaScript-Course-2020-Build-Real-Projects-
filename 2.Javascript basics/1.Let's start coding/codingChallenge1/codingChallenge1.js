var johnHeight = 1.85;
var johnMass = 85;

var markHeight = 1.7;
var markMass = 60;

var bmiJohn = johnMass / (johnHeight * johnHeight);
var bmiMark = markMass / (markHeight * markHeight);

var compareBmi = bmiJohn > bmiMark;
console.log("Is Jonh's BMI higher than Mark's?" + " " + compareBmi);
