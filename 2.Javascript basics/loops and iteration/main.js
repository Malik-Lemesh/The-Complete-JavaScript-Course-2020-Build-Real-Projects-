/**************
 * loops and iteration
 */
//inicijalizacija//uslov//inkrement
for (var i = 0; i < 10; i++) {
  //loop od 0 do 9
  console.log(i);
}
//loop od 1 do 20 uklucujuci i 20
for (var i = 1; i <= 20; i++) {
  //loop od 0 do 9
  console.log(i);
}

//mozemo i da ispisujemo i svaki drugi broj ili treci itd.
for (var i = 0; i < 20; i += 2) {
  //loop od 0 do 9
  console.log(i);
}

//ispis array
var john = ["john", "Smith", 1990, "designer"];
for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}

//while loop
var i = 0;
while (i < john.length) {
  console.log(john[i]);
  i++;
}
