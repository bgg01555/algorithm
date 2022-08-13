const find_permutations = function(nums) {
  result = [[]];
  
  for(let k=0;k<nums.length;k++){
    for(let i=0;i<result.length;i++){
      for(let j=0;j<result[i].length+1;j++){
        let temp = result[i].slice();
        temp.splice(j,0,nums[k]);
        result.push(temp);
      }
    }  
  }
  return result;
};


console.log(find_permutations([1, 3, 5]))
