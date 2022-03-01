var bmiJohn = {
  fullName: "John Smith",
  mass: 85,
  height: 1.8,
  calcBmiJohn: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

var bmiMark = {
  fullName: "Mark Twain",
  mass: 70,
  height: 1.6,
  calcBmiMark: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

bmiJohn.calcBmiJohn();
bmiMark.calcBmiMark();
console.log(bmiJohn, bmiMark);
if (bmiJohn.bmi > bmiMark.bmi) {
  console.log(bmiJohn.fullName + " has a higher BMI of " + bmiJohn.bmi);
} else if (bmiMark.bmi > bmiJohn.bmi) {
  console.log(bmiMark.bmi + "has a higher BMI of " + bmiMark.bmi);
}
