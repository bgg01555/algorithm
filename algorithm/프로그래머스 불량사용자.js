
function btrc(user_id,banned_id,vi,record,idx){
  if(idx==banned_id.length) {
    let temp='';
    for(let i=0;i<user_id.length;i++){
      if(vi[i]) temp+=i;
    }
    if(temp in record) {
      record[temp]=1;
      return 1;
    }
    else return 0;
  }

  let cnt=0;
  for(let i=0;i<user_id.length;i++){
    if(!vi[i] && user_id[i].match(banned_id[idx])){
      vi[i]=true;
      cnt+=btrc(user_id,banned_id,vi,record,idx+1);
      vi[i]=false;
    }
  }
  return cnt;
}

function solution(user_id, banned_id) {
  let vi = new Array(8).fill(false);
  let record={};
  for(let i=0;i<banned_id.length;i++){
      banned_id[i] = '^'+banned_id[i].replace(/\*/g,'.')+'$';
  }
  
  return btrc(user_id,banned_id,vi,record,0);
}

console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"],["fr*d*", "*rodo", "******", "******"]));