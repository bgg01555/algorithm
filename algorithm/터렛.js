const input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let n = +input[0];
for(let i=0;i<n;i++){
    let [x1,y1,r1,x2,y2,r2] = input[i+1].split(' ').map(x=>+x);
    if(r1>r2){
        [x1,x2]=[x2,x1];
        [y1,y2]=[y2,y1];
        [r1,r2]=[r2,r1];
    }

    let dist = Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2))
    if(dist===0 && r1===r2) console.log(-1);
    else if(r1+r2<dist || dist<r2 && (r2-r1)>dist) console.log(0);
    else if(r1+r2===dist || dist<r2 && (r2-r1)===dist) console.log(1);
    else if(r1+r2>dist) console.log(2);

}