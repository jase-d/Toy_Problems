// i = string : Numbers || Operators
// o = numerical value of fixed operation
// c = n/a
// edge = for only one number return / all inputs are valid
/*
Examples:

"9" => 9

"+ 1 2" => 3 // This is (1 + 2)

"+ + 1 2 30" => 33 // This is ((1+2)+30)

"+ + 12 16 * 10 4" => 68 // This is ((12+16)+(10*4))
*/

// if length is one and is a number return number
// otherwise
  // iterate over array of characters
    // if char is a number
      // if the last value of the operation is a number
        // add the first operator
        // add the character
      // otherwise
        // add char into operation string
        // if there are stored operators
          // add the first operator into the operation
    // otherwise
      // if it is the second to last index
      // or if there are no operators and the next value is a number
        // add the operator to the operation
      // otherwise
      // push the char into operators

const stringToMath = (string) => {
  if (string.length === 1) {
    return Number(string);
  };
  let maths = string.split(' ');
  let operators = [];
  let operation = '';
  maths.forEach((char, i) => {
    if (char == Number(char)) {
      let possibleNumber = operation[operation.length - 1];
      if (i && possibleNumber == Number(possibleNumber)) {
        operation += operators.shift();
        operation += char;
      } else {
        operation += char;
        if (operators.length) {
          operation += operators.shift();
        }
      }
    } else {
      if (i === maths.length - 2) {
        operation += char;
      } else if (!operators.length && maths[i + 1] == Number(maths[i + 1])) {
        operation += char;
      } else {
        operators.push(char);
      }
    };
  });
  return eval(operation);
};

console.log(stringToMath('1 + 2'));
// => 3
console.log(stringToMath('+ + 1 2 30'));
// => (1 + 2 + 30) => 33
console.log(stringToMath('+ + 12 16 10 * 4 + - + 4 3 2'));
// ('12 + 16 + 10 * 4 + 4 - 3 + 2') => 71