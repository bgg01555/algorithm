const input = require('fs').readFileSync('../dev/stdin').toString().trim().split('\n');

let n = +input[0];
let arr = [];

let people=0;
for(let i=1;i<input.length;i++){
    let [x,a] = input[i].split(' ').map(Number);
    //console.log(input[i].split(' ').map(Number))
    arr.push([x,a]);
    people+=a;
}

arr.sort((a,b)=>{
    if(a[0]>b[0]) return 1;
    return -1;
})

let left=0;
let right=people-arr[0][1];

let min = Math.abs(left-right);
let pos = arr[0][0];

for(let i=1;i<arr.length;i++){
    left+=arr[i-1][1];
    right -= arr[i][1];

    let temp = Math.abs(left-right);
    if(temp<min){
        min=temp;
        pos=arr[i][0];
    }
}

console.log(pos);