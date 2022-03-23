const input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let arr = input[1].split(' ').map(x=>+x);
let dp=Array(+input[0]).fill(1);
for(let i=0;i<arr.length;i++){
    for(let j=0;j<i;j++){
        if(arr[i]>arr[j]){
            dp[i]=Math.max(dp[i],dp[j]+1);
        }  
    }
}
console.log(Math.max(...dp));