//const input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\r\n');

const readline = require('readline');

function makeKeyMap(key){
    let keyMap = [];
    let keyMapCheck = {};

    for(let i=0;i<26;i++){
        keyMapCheck[String.fromCharCode(i+65)] = false;
    }
    
    for(let i=0;i<key.length;i++){
        if(keyMapCheck[key[i]] === false){
            keyMapCheck[key[i]] = true;
            keyMap.push(key[i]);
        }
    }
    
    for(let i=0;i<26;i++){
        if(keyMap.length>=25) break;
        let alpha = String.fromCharCode(i+65);
        if(alpha=='J') continue;
        if(keyMapCheck[alpha] == false){
            keyMap.push(alpha);
        }
    }
    return keyMap;
}

function alphaCut(target){
    let res = [];
    for(let i=0;i<target.length;i++){
        if(i==target.length-1){
            res.push(target[i]+'X');
            break;
        }

        if(target[i]==target[i+1]){
            if(target[i]=='X'){
                res.push('XQ');
            }
            else{
                res.push(target[i]+'X');
            }
        }
        else{
            res.push(target[i]+target[i+1]);
            i++;
        }        
    }
    return res;
}


let input = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.on('line', function (line) {
  input.push(line);
})
  .on('close', function () {

let target = input[0];
let key = input[1];
let keyMap = makeKeyMap(key);
let seprAlpha = alphaCut(target)
let answer = [];

for(let i=0;i<seprAlpha.length;i++){
    let a0 = seprAlpha[i][0];
    let a1 = seprAlpha[i][1];
    
    let idxZ = keyMap.findIndex(t=>t==a0);
    let idxO = keyMap.findIndex(t=>t==a1);

    
    if(parseInt(idxZ/5) == parseInt(idxO/5)){
        let temp = parseInt(idxZ/5)*5;
        answer.push(keyMap[(idxZ+1)%5+temp]+keyMap[(idxO+1)%5+temp]);
    }//같은 행

    else if((idxZ-idxO)%5==0){
        answer.push(keyMap[(idxZ+5)%25]+keyMap[(idxO+5)%25]);
    }//같은 열

    else{
        answer.push(keyMap[parseInt(idxZ/5)*5+(idxO%5)]+keyMap[parseInt(idxO/5)*5+(idxZ%5)]);
    }
}

    console.log(answer.join(''));
    process.exit();
});


