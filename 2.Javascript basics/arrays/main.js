/***************
 * arrays
 */
//initialize new array
//prvi i najcesci nacin kreiranja niza
var names = ["John", "Mark", "Jane"];
//drugi nacin
var years = new Array(1999, 1969, 1984);

console.log(names[0]); //pozivanje prvog clana arraya
console.log(names); //pozivanje citavog array
console.log(names.length); //izbroj sve clanove u array

//mutate array data
names[1] = "Ben"; //mijenja vrijednost drugog clana
names[names.length] = "Mary"; //dodaje novog clana na kraj niza
console.log(names);

//different data types
var john = ["John", "Smith", 1990, "teacher", "designer", false];

john.push("blue"); //dodaje novog clan na kraj array
john.unshift("Mr."); //dodaje novog clana na pocetak array
john.pop(); //brise zadnji clan
john.shift(); //brise prvi clan

console.log(john);
console.log(john.indexOf(1990)); //daje redni broj clana
console.log(john.indexOf(20)); //ako clan nije u array onda vraca -1
//testiranje sa ternary operatorom
var isDesigner =
  john.indexOf("designer") === -1
    ? "John is NOT designer"
    : "John IS a designer";
console.log(isDesigner);
