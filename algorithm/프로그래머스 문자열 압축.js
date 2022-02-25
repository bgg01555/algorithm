
function parser(s,cut){
    let dup=0;
    let tans='';
    let before=s.substr(0,cut);
    for(let i=0;i<s.length;i+=cut){
        let now = s.substr(i,cut);
        if(before === now){
            dup++;
        }
        else {
            if(dup!=1) tans+=dup;
            tans+=before;
            dup=1;
            before=now;
        }
    }
    if(dup!=1) tans+=dup;
    tans+=before;
    return tans.length;
}

function solution(s) {
    let answer = 1000;
    for(let i=1;i<501;i++){
        answer=Math.min(answer, parser(s,i));
    }
    return answer;
}

