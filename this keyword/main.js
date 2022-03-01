//console.log(this);
// calculateAge(1985);

// function calculateAge(year) {
//   console.log(2016 - year);
//   console.log(this);//this ako dode samo onda izlista citav objekt
// }
var john = {
  name: "John",
  yearOfBirth: 1990,
  calculateAge: function () {
    console.log(this);
    console.log(2016 - this.yearOfBirth);

    // function innerFunction() {
    //   console.log(this); //poziva citav objekt tj. u ovom slucaju window objekt
    // }
    // innerFunction();
  },
};
john.calculateAge();

var mike = {
  name: "Mike",
  yearOfBirth: 1985,
};

mike.calculateAge = john.calculateAge; //objekt mika preuzima vrijednost iz objekta john
mike.calculateAge();
