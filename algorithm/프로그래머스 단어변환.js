function isPossible(a,b){
    let cnt=0;
    for(let i=0;i<a.length;i++){
        if(a[i]!=b[i] && (++cnt)==2) return false;
    }
    return true;
}

function solution(begin, target, words) {
    let maps = {}, vi = {};
    maps[begin]=[];
    vi[begin]=true;
    
    let queue = [begin];
    for(let i=0;i<words.length;i++){
        for(let j=i+1;j<words.length;j++){
            if(isPossible(words[i],words[j])){
                if(words[i] in maps) maps[words[i]].push(words[j]);
                else maps[words[i]]=[words[j]];
                
                if(words[j] in maps) maps[words[j]].push(words[i]);                         
                else maps[words[j]]=[words[i]];
            }
        }
    }

    for(let i=0;i<words.length;i++){
        if(isPossible(begin,words[i])) maps[begin].push(words[i]);
    }
    
    

    let cnt=0;
    while(queue.length!=0){
        let r = queue.length;
        for(let k=0;k<r;k++){
            let now = queue.shift();
            if(now==target) {
                console.log('test');
                return cnt;
            }
            if(now in maps){
                for(let i=0;i<maps[now].length;i++){
                    if(!(maps[now][i] in vi)){
                        vi[maps[now][i]]=true;
                        queue.push(maps[now][i]);
                    }
                } 
            }
        }
        cnt++;
    }

    return 0;
}

console.log(solution("hit",	"cog"	,["hot", "dot", "dog", "lot", "log"]));