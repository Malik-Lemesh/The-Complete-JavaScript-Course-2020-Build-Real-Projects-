/**********
 * objects and properties
 */

var john = {
  //kod array je [],a kod objekta je {}
  //u sami objekat mozemo staviti sta god zelimo:string,broj ,array itd.
  firstName: "John",
  lastName: "Smith",
  birthYear: 1998,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false,
};
console.log(john);
//pojedinacnim clanovima u objektu pristupamo sa .(tacka) ili sa [],ali se poziva kao string jer je ovo array
console.log(john.firstName);
console.log(john["lastName"]);
//mozemo pozivati i sa varijablama
var x = "birthYear";
console.log(john[x]);
//mijenjanje property u objektu
john.job = "designer";
john["isMarried"] = true;
console.log(john);

//izrada objekta -new object sintax
var jane = new Object();
jane.firstName = "Jane";
jane.birthYear = 1969;
jane["lastName"] = "Smith";
console.log(jane);
