const input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let n = +input[0];
const regex = /^(100+1+|01)+$/;

for(let i=1;i<=n;i++){
  let str = input[i].trim();
  let comp = str.match(regex);
  if(comp){
    if(comp[0]!=str) console.log('NO');
    else console.log('YES');    
  }
  else console.log('NO');
}