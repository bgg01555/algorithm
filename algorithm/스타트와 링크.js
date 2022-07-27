const input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\r\n');


let n = +input[0];
let S = [];
for(let i=1;i<input.length;i++){
  S.push(input[i].split(' ').map(x=>+x));
}

function calcPoint(team){
  let res=0;
  for(let i=0;i<team.length;i++){
    for(let j=i+1;j<team.length;j++){
      res+=S[team[i]][team[j]];
      res+=S[team[j]][team[i]];
    }
  }
  return res;
}

function btrc(team,idx,cnt){
  if(cnt==n/2){
    let team2 = [];
    for(let i=0;i<n;i++) {
      if(team.indexOf(i)<0) {
        team2.push(i);
      }
    }
 
    return Math.abs(calcPoint(team)-calcPoint(team2));
  }
  else if(idx==n) return Infinity;
  else{
    
    team.push(idx)
    let res = btrc(team,idx+1,cnt+1)
    team.pop();

    return Math.min(res,btrc(team,idx+1,cnt));
  }
}

let team=[]
console.log(btrc(team,0,0));