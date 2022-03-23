//const input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');

function op(a,b,op){
    if(op=='*') return a*b;
    if(op=='-') return a-b;
    if(op=='+') return a+b;
}

function calc(express,order){

    for(let j=0;j<3;j++){
        let newEx=[];
        for(let i=0;i<express.length;i++){
            if(express[i]==order[j]){
                let left = newEx.pop();
                let right = express[i+1];
                newEx.push(op(left,right,order[j]));
                i++;
            }
            else newEx.push(express[i]);
        }
        express=newEx;
    }
    return express[0];
}

function solution(expression) {
    let parsed_express=[];
    let idx=0;
    for(let i=0;i<expression.length;i++){
        if(isNaN(expression[i])){
            parsed_express.push(+expression.slice(idx,i));
            parsed_express.push(expression[i]);
            idx=i+1;
        }
    }
    parsed_express.push(+expression.slice(idx));
    
    let ans=0;
    ans = Math.max(ans,Math.abs(calc(parsed_express,['+','-','*'])));
    ans = Math.max(ans,Math.abs(calc(parsed_express,['+','*','-'])));
    ans = Math.max(ans,Math.abs(calc(parsed_express,['-','+','*'])));
    ans = Math.max(ans,Math.abs(calc(parsed_express,['-','*','+'])));
    ans = Math.max(ans,Math.abs(calc(parsed_express,['*','-','+'])));
    ans = Math.max(ans,Math.abs(calc(parsed_express,['*','+','-'])));

    return ans;
}
console.log(solution("100-200*300-500+20"));