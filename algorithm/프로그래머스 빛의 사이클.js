// let dx = [1,0,-1,0];
// let dy = [0,1,0,-1];

// function dfs(grid,vi,x,y,d,cnt){
//     if(vi[x][y][d]) return cnt;
//     vi[x][y][d]=true;  

//     if(grid[x][y]=="L"){
//         d= d==3?0:d+1;
//     }
//     else if(grid[x][y]=="R"){
//         d= d==0?3:d-1;
//     }

//     let nx = (x+dx[d]+grid.length)%grid.length;
//     let ny = (y+dy[d]+grid[0].length)%grid[0].length;  
//     return dfs(grid,vi,nx,ny,d,cnt+1);

    
// }

// function solution(grid) {
//     let vi = Array.from(Array(grid.length), () => Array.from(Array(grid[0].length),()=>new Array(4).fill(false)));
//     let ans=[];
//     for(let i=0;i<grid.length;i++){
//         for(let j=0;j<grid[i].length;j++){
//             for(let k=0;k<4;k++){
//                 if(!vi[i][j][k]){
//                     ans.push(dfs(grid,vi,i,j,k,0));
//                 }
//             }
//         }
//     }

//     return ans.sort((a,b)=>a-b);
// }

// console.log(solution(["SR","SR"]));

let dx = [1,0,-1,0];
let dy = [0,1,0,-1];

function go(grid,vi,x,y,d,cnt){

    while(true){
        if(vi[x][y][d]) break;
        vi[x][y][d]=true;  
    
        if(grid[x][y]=="L"){
            d= d==3?0:d+1;
        }
        else if(grid[x][y]=="R"){
            d= d==0?3:d-1;
        }
    
        x = (x+dx[d]+grid.length)%grid.length;
        y = (y+dy[d]+grid[0].length)%grid[0].length;  
        cnt++;
    }
    return cnt;
}

function solution(grid) {
    let vi = Array.from(Array(grid.length), () => Array.from(Array(grid[0].length),()=>new Array(4).fill(false)));
    let ans=[];
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            for(let k=0;k<4;k++){
                if(!vi[i][j][k]){
                    ans.push(go(grid,vi,i,j,k,0));
                }
            }
        }
    }

    return ans.sort((a,b)=>a-b);
}

console.log(solution(["SR","SR"]));