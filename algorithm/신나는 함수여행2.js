const input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let dp=Array.from(Array(21),()=>Array.from(Array(21),()=>Array(21).fill(-1)));

function solve(a,b,c){
  if(a<=0 || b<=0 || c<=0) return 1;
  if(a>20||b>20||c>20) return dp[20][20][20]=solve(20,20,20);
  if(dp[a][b][c]!=-1) return dp[a][b][c];
  if(a<b && b<c) dp[a][b][c] = solve(a,b,c-1)+solve(a,b-1,c-1)-solve(a,b-1,c);
  return dp[a][b][c] = solve(a-1,b,c)+solve(a-1,b-1,c)+solve(a-1,b,c-1)-solve(a-1,b-1,c-1);
}

let ans='';
for(let i=0;i<input.length-1;i++){
  let [a,b,c]=input[i].split(' ').map(Number);
  if(a==-1 && b==-1 && c==-1) break;
  ans+=`w(${a}, ${b}, ${c}) = ${solve(a,b,c)}\n`;
}
console.log(ans);

