const input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');

let idx=1;
let tc = +input[0];
for(let i=0;i<tc;i++){
  
  let [n,k] = input[idx++].split(' ').map(Number);
  let link = new Array(n+1);
  let indegree = new Array(n+1).fill(0);
  let dp = new Array(n+1).fill(0); 
  let costs = [0,...input[idx++].split(' ').map(Number)];
  
  for(let j=1;j<=n;j++) link[j]=[];
  for(let j=0;j<k;j++){
    let [a,b] = input[idx++].split(' ').map(Number);
    link[a].push(b);
    indegree[b]++;
  }
  let target = +input[idx++];

  if(indegree[target]==0) {
    console.log(costs[target]);
    continue;
  }

  let q = [];
  for(let j=1;j<=n;j++){
    if(!indegree[j]){
      dp[j]=costs[j];
      q.push(j);
    }
  }

  while(q.length){
    let now = q.shift();
    for(let l=0;l<link[now].length;l++){
      let next = link[now][l];
      dp[next] = Math.max(dp[now]+costs[next],dp[next]);
      if((--indegree[next])==0) q.push(next);
    }
  }
  console.log(dp[target]);  
  

}