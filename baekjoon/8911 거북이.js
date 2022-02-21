const input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let t = +input[0];
let ans='';
for(let i=1;i<=t;i++){
    let max_loc=[0,0,0,0];
    let [nx,ny]=[0,0];
    let dx=[0,1,0,-1]
    let dy=[1,0,-1,0];
    let dir=0;

    let move = input[i].split('');
    for(let j=0;j<input[i].length;j++){
        switch(input[i][j]){
            case 'F':
                nx=nx+dx[dir];    
                ny=ny+dy[dir];
                break;
            case 'B':
                nx=nx+dx[dir]*-1;
                ny=ny+dy[dir]*-1;
                break;
            case 'L':
                dir-=1;
                if(dir<0) dir=3;
                break;
            case 'R':
                dir+=1;
                dir%=4;
                break;
        }
        max_loc[0]=max_loc[0]<nx?nx:max_loc[0];//x최소
        max_loc[1]=max_loc[1]<ny?ny:max_loc[1];//y최소
        max_loc[2]=max_loc[2]>nx?nx:max_loc[2];//x최대
        max_loc[3]=max_loc[3]>ny?ny:max_loc[3];//y최대
    }    

    ans+=((max_loc[0]-max_loc[2])*(max_loc[1]-max_loc[3]))+'\n';
}
console.log(ans);