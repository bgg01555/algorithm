const input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');

let [n,s] = input[0].split(' ').map(x=>+x);
let arr = input[1].split(' ').map(x=>+x);
let l=r=0;
let sumn=arr[0];
let ans=100001;
while(l<=r && r<n){
    if(sumn>=s){
        ans = Math.min(ans,r-l+1);
        sumn-=arr[l];
        l++;
    }
    else if(sumn<s){
        r++;
        if(r<n) sumn+=arr[r];
    }

}
if(ans==100001) console.log(0);
else console.log(ans);