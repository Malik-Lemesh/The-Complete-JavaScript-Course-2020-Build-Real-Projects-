//falsy values : undefined, null ,0 ,'', NaN
//truthy values: NOT falsy values

var height; //varijabla nije definisana
// height = 22;
height = 0;
if (height || height === 0) {
  //prvi je false a drugi je true,i onda ce biti true tj. varijabla je definisana
  console.log("Variable is defined");
} else {
  console.log("Variable has NOT been defined.");
}

//equality operators
// === poredi da li je nesto potpuno isto,ako nije vraca FALSE
// == operator poredenja,vraca TRUE ako su varijable jednake
