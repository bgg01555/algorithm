const find_subsets = function(nums) {
  let subsets = [[],[nums[0]]];
  subsets.sort((a,b)=>a-b);
  let l=0,r=2;
  for(let i=1;i<nums.length;i++){
    l=0;
    if(nums[i]==nums[i-1]){
      l=r;
    }
    r = subsets.length;
    while(l!=r){
      let temp = subsets[l].slice();
      subsets.push([...temp,nums[i]]);
      l++;
    }
  }

  return subsets;
};


console.log(find_subsets([1, 3, 3]))
console.log(find_subsets([1, 5, 3, 3]))
