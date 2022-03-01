/****************
 * objects and methods
 */

var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1990,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false,
  // //varijabla i expression function prvi nacin
  // calcAge: function (birthYear) {
  //   return 2018 - this.birthYear;
  // },
  calcAge: function () {
    this.age = 2018 - this.birthYear;
  },
};
// //ubacivanje metoda sa funkcijom u drugi metod
// john.age = john.calcAge();
// console.log(john.calcAge(1990));
// console.log(john);

//drugi nacin ubacivanja
john.calcAge();
console.log(john);
