function solution(s){
    let stack=[];
    for(let i=0;i<s.length;i++){
        if(s[i]=='(') stack.push(s[i]);
        else if(!stack.length)return false;
        else stack.pop();
    }
    if(stack.length) return false;
    return true;
}