function solution(n, times) {
    let l=0,r=1e9;
    while(l+1!=r){
        let mid = parseInt((l+r)/2);
        let tn = times.reduce((acc,cur)=>{
            return acc+parseInt(mid/cur);
        },0);
        if(tn>=n) r=mid;
        else if(tn<n) l=mid;
    }

    return r;
}

console.log(solution(6,[7,10]));