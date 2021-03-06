//2차원 배열 생성
let arr1 = Array.from(Array(5), () => new Array(2).fill(0));
//방법2. let arr1=new Array(k+1).fill([]).map(x=>new Array(5).fill(0));

//splice
let arr2 = new Array(10).fill(0);
arr2 = arr2.map((x,i)=>{return x+i+1;});//1~10
//console.log(arr2.splice(1,2));//[2,3]
////console.log(arr2.splice(5,1));//[6]

//slice 끝에서 2번째까지, 끝문자 제거
let arr3 = new Array(10).fill(0);
arr3 = arr3.map((x,i)=>{return x+i+1;});//1~10
////console.log(arr3.slice(0,-2));//1~8

//replace , regex
let str1 = 'amdw,a,dcdwdawd'
let str_replace = str1.replace(/,/g,''); //특정 문자 제거
////let song = songs.replace(/[A-Z]#/g,x => x[0].toLowerCase()); //제거 직전의 문자에 대한 참조
console.log(str_replace);

//split 이용한 특정 문자 제거
let str2 = 'amdw,a,dcdwdawd'
console.log(str2.split(',').join(''));

//배열 최댓값 최솟값
Math.max(...i)
Math.min(...i)

//이분탐색
let l=1,r=(+arr[arr.length-1])-arr[0]+1;
while(l+1!=r){
    let mid = parseInt((l+r)/2);
    if(parametricSearch(mid)) l=mid;
    else r=mid;
}
console.log(l);


//최대공약수
let gcd = (n1, n2) => {
    while(n2>0){
        let temp;
		n1 %= n2;

		temp = n1;
		n1 = n2;
		n2 = temp;
    }
    return n1;
}

//최소공배수
let lcm = (n1, n2) => {
	return n1 * n2 / gcd(n1, n2);
}

//2차원 배열 생성
Array.from(Array(31), () => new Array(31).fill(0));

//3차원 배열 생성
let arr = Array.from(Array(5), () => Array.from(Array(5), () => new Array(5).fill(0)));


//LowerBound UpperBound
// https://gywlsp.github.io/algorithm/2/


//반복문
const lowerBound = (start, end, key) => {
    let mid;
    while (start <= end) {
      mid = Math.floor((start + end) / 2);
      if (numList[mid] < key) {
        start = mid + 1;
        continue;
      }
      result2 = Math.min(result2, mid);
      end = mid - 1;
    }
  };

  const upperBound = (start, end, key) => {
    let mid;
    while (start <= end) {
      mid = Math.floor((start + end) / 2);
      if (numList[mid] <= key) {
        start = mid + 1;
        continue;
      }
      result2 = Math.min(result2, mid);
      end = mid - 1;
    }
  };

  //약수 개수 구하기
  function cntdiv(n){
    let cnt=0;
    for(let i=1;i<=Math.sqrt(n);i++){
          if(n%i==0){
              if(n/i==i) cnt++;
              else cnt=cnt+2;
          }
      }
      return cnt;
  }

  정리  
  https://velog.io/@bgg01578/Javascript-%EB%AC%B8%EB%B2%95%EC%A0%95%EB%A6%AC-1