const input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');

let [v,e] = input[0].split(' ').map(x=>+x);
let parent = new Array(e+1).fill(0).map((x,i,arr)=>{
    return arr[i]=i;
});

let arr=[];
for(let i=1;i<=e;i++){
    arr.push(input[i].split(' ').map(x=>+x));
}

arr.sort((a,b)=>{
    if(a[2]>b[2]) return 1;
    else return -1;
});

function findParent(x){
    if(x===parent[x]) return x;
    else return parent[x]=findParent(parent[x]);
}

let ans=0;
for(let i=0;i<arr.length;i++){
    let a = arr[i][0];
    let b = arr[i][1];
    let c = arr[i][2];
    let pa = findParent(a);
    let pb = findParent(b);

    if(pa!=pb){
        parent[pa]=pb;
        ans+=c;
    }
}

console.log(ans);