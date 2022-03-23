const input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let dp = Array.from(Array(1001),()=>Array(3).fill(0));
for(let i=1;i<input.length;i++){
  let [a,b,c] = input[i].split(' ').map(Number);
  dp[i][0]=Math.min(dp[i-1][1],dp[i-1][2])+a;
  dp[i][1]=Math.min(dp[i-1][0],dp[i-1][2])+b;
  dp[i][2]=Math.min(dp[i-1][0],dp[i-1][1])+c;
}
console.log(Math.min(...dp[+input[0]]));

