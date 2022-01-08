var firstName = "John";
var age = 22;

//ternary operator
age >= 18
  ? console.log(firstName + " drinks beer. ")
  : console.log(firstName + " drinks juice. ");
//naziva se ternary jer ima 3 bloka
//blok 1   //blok 2

//Prvi blok je condition ,drugi je if statement ,a treci je else statement

//drugi nacin pisanja ternary operatora
var drink = age >= 18 ? "beer" : "juice";
console.log(drink);
//isto kao :
if (age >= 18) {
  var drink = "beer";
} else {
  var drink = "juice";
}

//switch statement

var job = "instructor";
switch (job) {
  //mozemo staviti vise od jednog case :
  case "teacher":
  case "instructor":
    console.log(firstName + " teaches kids how to code.");
    break;
  case "driver":
    console.log(firstName + " drives in uber in Sarajevo.");
    break;
  case "designer":
    console.log(firstName + "designs websites.");
    break;
  default:
    console.log(firstName + " does something else.");
}
//switch sa logical izrazima
switch (true) {
  case age < 13:
    console.log(firstName + " is a boy.");
    break;
  case age >= 13 && age < 20:
    console.log(firstName + " is a teenager.");
    break;
  case age >= 20 && age < 30:
    console.log(firstName + " is a young man.");
    break;
  default:
    console.log(firstName + " is a man.");
}
