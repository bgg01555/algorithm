const input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let n = +input[0];
let k = +input[1];

let l=0,r=k+1;
while(l+1!=r){
  let mid = parseInt((l+r)/2)
  let count=0;
  for(let i=1;i<=n;i++) count+=Math.min(n,parseInt(mid/i));
  if(count>=k) r=mid;
  else l=mid;
}
console.log(l+1);