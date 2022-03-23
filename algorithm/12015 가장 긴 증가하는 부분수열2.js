const input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let arr = input[1].split(' ').map(x=>+x);
let numList=[Infinity];
const lowerBound = (start, end, key) => {
    let mid;
    let result=1000001;
    while (start <= end) {
      mid = Math.floor((start + end) / 2);
      if (numList[mid] < key) {
        start = mid + 1;
        continue;
      }
      result = Math.min(result, mid);
      end = mid - 1;
    }
    return result;
};

for(let i=0;i<arr.length;i++){
    let idx = lowerBound(0,numList.length,arr[i]);
    if(idx==numList.length) numList.push(arr[i]);
    else numList[idx]=arr[i];
}
console.log(numList.length);