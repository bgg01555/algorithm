const input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');

let tc=+input[0];
let anslist='';
for(let i=0;i<tc;i++){
    let [a,b] = input[i+1].split(' ').map(x=>+x);
    let dist = b-a;
    let k=1;
    while(true){
        if(k*k>=dist)break;
        k++;   
    }
    if(k*k>dist) k--;

    dist-=k*k;
    let ans = (2*k-1);
    ans+=parseInt(dist/k);
    if(dist%k!=0) ans++;

    anslist+=(ans+'\n');
}
console.log(anslist);