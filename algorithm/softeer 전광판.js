    //const input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\r\n');

    const readline = require('readline');

    let input = [];
    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });
    rl.on('line', function (line) {
    input.push(line.trim());
    })
    .on('close', function () {

        let numInfo = Array.from(Array(11), () => new Array(7).fill(false));
    
        numInfo[0][0]=numInfo[0][1]=numInfo[0][2]=numInfo[0][4]=numInfo[0][5]=numInfo[0][6]=true;
        numInfo[1][2]=numInfo[1][5]=true;
        numInfo[2][0]=numInfo[2][2]=numInfo[2][3]=numInfo[2][4]=numInfo[2][6]=true;
        numInfo[3][0]=numInfo[3][2]=numInfo[3][3]=numInfo[3][5]=numInfo[3][6]=true;
        numInfo[4][1]=numInfo[4][2]=numInfo[4][3]=numInfo[4][5]=true;
        numInfo[5][0]=numInfo[5][1]=numInfo[5][3]=numInfo[5][5]=numInfo[5][6]=true;
        numInfo[6][0]=numInfo[6][1]=numInfo[6][3]=numInfo[6][4]=numInfo[6][5]=numInfo[6][6]=true;
        numInfo[7][0]=numInfo[7][1]=numInfo[7][2]=numInfo[7][5]=true;
        numInfo[8][0]=numInfo[8][1]=numInfo[8][2]=numInfo[8][3]=numInfo[8][4]=numInfo[8][5]=numInfo[8][6]=true;
        numInfo[9][0]=numInfo[9][1]=numInfo[9][2]=numInfo[9][3]=numInfo[9][5]=numInfo[9][6]=true;
        
        let tc = +input[0];
        for(let i=0;i<tc;i++){
            let ans=0;
            let [a,b] = input[i+1].split(' ');
            while(a.length<5) a='e'+a;
            while(b.length<5) b='e'+b;
            
            for(let k=0;k<a.length;k++){
                let aN,bN;
                if(a[k]=='e') aN=10;
                else aN=+a[k];
                if(b[k]=='e') bN=10;
                else bN=+b[k];

                for(let j=0;j<7;j++){
                    if(numInfo[aN][j]!=numInfo[bN][j]) ans++;
                }
        
            }
            console.log(ans);

        }
    });


