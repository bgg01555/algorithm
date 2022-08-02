function go(tickets,idx,vi,route){
    let [from,to] = tickets[idx];
    for(let i=0;i<tickets.length;i++){
        if(!vi[i] && tickets[i][0]==to){
            route.push(to);
            vi[i]=true;
            let temp = go(tickets,i,vi,route);
            if(temp[0]!=-1) return temp;
            vi[i]=false;
            route.pop();
        }
    }

    if(vi.includes(false)) return [-1];
    route.push(to);
    return route;
}

function solution(tickets) {
    let vi = new Array(tickets.length).fill(false);
    tickets.sort((a,b)=>{
        if(a[1]>b[1]) return 1;
        else return -1;
    })
    
    let route = []
    let temp;
    for(let i=0;i<tickets.length;i++){
        if(tickets[i][0]=="ICN"){
            route.push("ICN");
            vi[i]=true;
            temp = go(tickets,i,vi,route);
            if(temp[0]!=-1) return temp;
            vi[i]=false;
            route.pop();
        }
    }
}

console.log(solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]));