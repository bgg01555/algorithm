const input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let N = +input[0];

let tf=parseInt(N/5)+1;
if(!(N%5)) tf--;
let five,three;
while(tf>=0){
    five =  tf;
    three = (N-tf*5)/3;
    if(three>=0 && Number.isInteger(three)) break;
    tf--;
}
if(tf>=0) console.log(five+three);
else console.log(-1);