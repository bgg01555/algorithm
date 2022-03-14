const input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');

let [n,m]=input[0].split(' ').map(x=>+x);
let q = new Array(n);
for(let i=0;i<q.length;i++) q[i]=i+1;

let ans=0;
let j=0;
let prt=input[1].split(' ').map(x=>+x);
for(let i=0;i<prt.length;i++){
    //if()
    if(q[j]===prt[i]){
        q.splice(j,1);
        if(j>q.length) j=0;
    }
    else{
        let target = q.findIndex(x=>x===prt[i]);
        let dist = Math.abs(j-target);
        ans+= Math.min(dist,q.length-dist);
        j=target;
        i--;
    }

}
console.log(ans);