function solution(n, info) {
    let dp = Array.from(Array(12),()=>new Array(12).fill(0));
    let route = Array.from(Array(12),()=>new Array(12).fill([]));

    //화살개수 => 무게
    //과녁점수 => 가치
    
    for(let a=1;a<=11;a++){
        let w = info[a-1]+1;
        let v = 10-(a-1);
        let ov = v;
        if(info[a-1]!=0) v*=2;
        for(let b=1;b<=n;b++){
            if(w>b) {
                dp[a][b]=dp[a-1][b];
                route[a][b]=route[a-1][b].slice();
            }
            else {
                if(dp[a-1][b]>dp[a-1][b-w]+v){
                    dp[a][b]=dp[a-1][b];
                    route[a][b]=route[a-1][b].slice();
                }
                else{
                    dp[a][b] = dp[a-1][b-w]+v;
                    route[a][b] = route[a-1][b-w].slice();
                    route[a][b].push(ov);
                }
            }
        }
    }
        
    let peach=0,lion=0;
    for(let i=0;i<info.length;i++){
        if(route[10][n].includes(10-i)){
            lion+=10-i;
        }
        else if(info[i]!=0) peach+=10-i;
    }
    if(peach>=lion) return [-1];
    
    let shootCnt = 0;
    let res=[];
    for(let i=10;i>0;i--){
        if(route[10][n].includes(i)){
            res.push(info[10-i]+1);
            shootCnt+=info[10-i]+1;
        }
        else res.push(0);
    }
    
    res.push(n-shootCnt);
    return res;
}

console.log(solution(3,[0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0]));