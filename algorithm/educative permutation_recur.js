const find_permutaion_recur = function(nums,vi,result,temp,idx) {
  
  if(temp.length==nums.length){
    result.push(temp.slice());
    return;
  }

  for(let i=0;i<nums.length;i++){
    if(!vi[i]) {
      vi[i]=true;
      temp.push(nums[i]);
      find_permutaion_recur(nums,vi,result,temp,idx);
      temp.pop();
      vi[i]=false;
    }
  }  
};
const find_permutations = function(nums) {
  result = [];
  temp = [];
  vi = new Array(nums.length).fill(false);

  find_permutaion_recur(nums,vi,result,temp,0);  
  return result;
};


console.log(find_permutations([1, 3, 5]))
