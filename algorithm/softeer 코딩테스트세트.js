//const input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\r\n');

const readline = require('readline');
let input = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    input.push(line.trim());
})
.on('close', function () {
    function can(height,diffInfo){
        let Copy = diffInfo.slice();
        for(let i=0;i<Copy.length;i+=2){
            if(Copy[i]<height){
                if(i!=0) Copy[i] += Copy[i-1];
                if(Copy[i]<height){
                    if(i==Copy.length-1){
                        return false;
                    }
                    if(height-Copy[i]>Copy[i+1]){
                        return false;
                    }
                    else{
                        Copy[i+1]-= (height-Copy[i]);
                        Copy[i]=height;
                    }
                }
            }
        }
    
        return true;
    }
    
    let [n,t] = input[0].split(' ').map(x=>+x);
    
    for(let i=1;i<input.length;i++){
        let diffInfo = input[i].split(' ').map(x=>+x);
        let l=0,r=10000000000001;
        while(l+1!=r){
            let mid = parseInt((l+r)/2);
            if(can(mid,diffInfo)) l=mid;
            else r=mid;
        }
    
        console.log(l);
    
    }
});

