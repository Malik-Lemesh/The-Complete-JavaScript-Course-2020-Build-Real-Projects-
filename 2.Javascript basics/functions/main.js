//naziv       //argument
function calculateAge(birthYear) {
  //neki kod koji se izvrsava
  //daje nam vrijednost koju racuna funkcija.
  return 2022 - birthYear;
}
var ageJohn = calculateAge(1979);
var ageMike = calculateAge(1990);
var ageJane = calculateAge(1950);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstname) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement > 0) {
    console.log(firstname + " retires in " + retirement + " years.");
  } else {
    console.log(firstname + " is already retired.");
  }
}

yearsUntilRetirement(1950, "Mujo");
yearsUntilRetirement(1979, "Malik");
yearsUntilRetirement(1990, "Semso");
