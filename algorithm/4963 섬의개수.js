const input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');

let idx=0;
let dx=[0,0,1,-1,1,1,-1,-1];
let dy=[1,-1,0,0,1,-1,1,-1];
let n=1,m=1;
let vi,maps;
let ans='';

function dfs(x,y){
    for(let i=0;i<8;i++){
        let nx = x+dx[i];
        let ny = y+dy[i];
        if(nx<0 || nx>=n || ny<0 || ny>=m) continue;
        if(vi[nx][ny] || !maps[nx][ny]) continue;

        vi[nx][ny]=true;
        dfs(nx,ny);
    }
}

while(true){

    let cnt=0;
    [m,n] = input[idx++].split(' ').map(x=>+x);
    maps=[];
    vi=[];

    vi=new Array(n);
    for(let i=0;i<n;i++){
        vi[i] = new Array(m).fill(false);
    }    

    for(let i=0;i<n;i++){
        maps.push(input[idx++].split(' ').map(x=>+x));
    }

    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(!vi[i][j] && maps[i][j]){
                cnt++;
                vi[i][j]=true;
                dfs(i,j);
            }
        }
    }
    if(!n && !m) break;
    ans=ans+cnt+'\n';
}
console.log(ans);