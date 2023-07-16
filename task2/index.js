var num1 = 20;
console.log("The first number is ".concat(num1, " "));
var num2 = 35;
console.log("The second number is ".concat(num2, " \n"));
// Arthimetic Operator
console.log("\nSome of the Arthimetc Operations are: ");
var add = (num1 + num2);
console.log("Addition of ".concat(num1, " and ").concat(num2, " is: ").concat(add));
var sub = (num1 - num2);
console.log("Subtraction of ".concat(num1, " and ").concat(num2, " is: ").concat(sub));
var multiply = (num1 * num2);
console.log("Multiplication of ".concat(num1, " and ").concat(num2, " is: ").concat(multiply));
var division = (num1 / num2);
console.log("Division of ".concat(num1, " and ").concat(num2, " is: ").concat(division));
var exp = (Math.pow(num1, num2));
console.log("".concat(num1, " exponent ").concat(num2, " is: ").concat(exp));
var modulus = (num1 % num2);
console.log("Modulus of ".concat(num2, " and ").concat(num1, " is: ").concat(exp, "\n"));
//Logical Operator
console.log("\nSome of the Logical Operations are: ");
console.log("Number 1 is >= 5 and number 1 is < 10: ".concat(num1 >= 5 && num1 < 10));
console.log("Number 1 is greater then 5 and number 1 is < 10: ".concat(num1 > 5 && num1 < 10));
console.log("Number 1 is >= 5 or number 1 is < 10: ".concat(num1 >= 5 || num1 < 10));
console.log("Number 1 is > 5 and number 1 is < 10: ".concat(num1 > 5 || num1 < 10));
console.log("Number 1 is not less then 10: ".concat((!(num1 < 10))));
console.log("Number 1 is not greater then 10: ".concat((!(num1 > 10)), "\n"));
//Comparison Operators
console.log("\nSome of the Comparison Operations are: ");
console.log("Number1 is equal to number 2? ".concat(num1 == num2));
console.log("The case and Number1 is equal to number 2? ".concat(num1 === num2));
console.log("Number1 is not equal to number 2? ".concat(num1 != num2));
console.log("Number1 is greater then number 2? ".concat(num1 > num2));
console.log("Number1 is less then number 2? ".concat(num1 < num2));
console.log("Number1 is greater then or equal to number 2? ".concat(num1 >= num2));
console.log("Number1 is less then or equal to number 2? ".concat(num1 <= num2, "\n"));
//Assignment Operator
console.log("\nSome of the Arthimetc Operations are: ");
var add_three = num1 += 3;
console.log("num1 + 3 is: ".concat(add_three));
var sub_three = num1 -= 3;
console.log("num1 - 3: ".concat(sub_three));
