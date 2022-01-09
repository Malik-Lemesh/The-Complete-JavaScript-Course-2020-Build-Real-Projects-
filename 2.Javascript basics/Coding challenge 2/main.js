var scoreTeamJohn = (89 + 135 + 103) / 3;
var scoreTeamMike = (116 + 94 + 123) / 3;
var scoreTeamMary = (97 + 134 + 105) / 3;
console.log(scoreTeamJohn, scoreTeamMike, scoreTeamMary);

if (scoreTeamJohn > scoreTeamMike && scoreTeamJohn > scoreTeamMary) {
  console.log(
    "John's team win with average score " + scoreTeamJohn + " points."
  );
} else if (scoreTeamMike > scoreTeamJohn && scoreTeamMike > scoreTeamMary) {
  console.log(
    "Mike's team win with average score " + scoreTeamMike + " points."
  );
} else if (scoreTeamMary > scoreTeamJohn && scoreTeamMary > scoreTeamMike) {
  console.log(
    "Mary's team win with average score " + scoreTeamMary + " points."
  );
} else {
  console.log("There is a draw.");
}

// if (scoreTeamJohn > scoreTeamMike) {
//   console.log(
//     "John's team win with average score " + scoreTeamJohn + " points."
//   );
// } else if (scoreTeamJohn < scoreTeamMike) {
//   console.log(
//     "Mike's team win with average score " + scoreTeamMike + " points."
//   );
// } else {
//   console.log("There is a draw.");
// }
