// function to find the least common multiple between two numbers
function lcm(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number'))
    return false;
  return (!x || !y) ? 0 : Math.abs((x * y) / gcd(x, y));
}

// function to find the greatest common denominator between two numbers 
function gcd(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

// since we have an array of numbers and not an exact amount we compute recursively
// between two numbers and then we hold that value and compare it to the next number
// of the array until we go thru all the number on the array
let lcmA = a[0];
for (let i = 0; i < a.length; i++) {
  lcmA = lcm(lcmA, a[i]);
}

// since we have an array of numbers and not an exact amount we compute recursively
// between two numbers and then we hold that value and compare it to the next number
// of the array until we go thru all the number on the array
let gcdB = b[0];
for (let j = 0; j < b.length; j++) {
  gcdB = gcd(gcdB, b[j]);
}

// now that we have the gcd from the second array and the lcm from teh first array
// we can test from the lcm to the gcd which numbers meet the criteria which are divisible
// on both of the sets of numbers a and b
// the count keeps how manny of those numbers exist
// variable i will increment the while loop to test for the next value
// variable n will hold the number
// array arr will keep record of that number as it goes thru the loop
// so that we can console out
let count = 0;
let i = 1;
let n = 0;
let arr = [];
while (n < gcdB) {
  n = lcmA * i;
  if (gcdB % n == 0) {
    count += 1;
    arr.push(lcmA * i);
  }
  i++;
}

return count;
console.log(arr);