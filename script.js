// let score = [2, 4, 2, 6, 1, 7, 8, 9, 2, 1];
// let score = [2, 4, 2, 6, 1, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 2, 2, 1];
// let score = [4, 6, 4, 5, 6, 2];
let score = [2, 3, 4, 4, 3, 2, 1];
let n = score.length;
let candies = [];
for (i = 0; i < n; i++){
  candies.push(0);
}
candies[0] = 1;
for (i = 1; i < n ; i++) {
  if(candies[i] == 0) {
    candies[i] = 1;
    console.log('1st-if   ' + candies);
  }
  if (score[i] > score[i-1]) {
    candies[i] = candies[i-1] + 1;
    console.log('2nd-if   ' + candies);
  }
}
for (i = n-1; i > 0; i--) {
  if (score[i-1] > score[i] && candies[i-1] <= candies[i]) {
    candies[i-1] = candies[i] + 1;
    console.log('2nd-loop ' + candies);
  }
}
let sum = 0;
for (i = 0; i < n; i++) {
    sum += candies[i];
}
console.log('Teacher needs to get ' + sum + ' candies.');