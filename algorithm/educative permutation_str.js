const find_permutaion_recur = function(str,result,idx,temp) {
  if(idx==str.length) {
    result.push(temp);
    return;
  }
  find_permutaion_recur(str,result,idx+1,temp+str[idx]);  
  if(isNaN(str[idx])){
    find_permutaion_recur(str,result,idx+1,temp+str[idx].toUpperCase());  
  }  
};

const find_permutations = function(str) {
  result = [];
  temp = [];
  find_permutaion_recur(str,result,0,temp);  
  return result;
};


console.log(find_permutations('ab7c'))
