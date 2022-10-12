const Deque = require('./node_modules/collections/deque'); //http://www.collectionsjs.com

//2차원 배열 최댓값 구하기
return Math.max(...dp.map((el) => Math.max(...el)));

//딕셔너리의 키에 변수값 사용하는 법 
https://velog.io/@aaronddy/JavaScript-object3

//2차원 벡터 만들기
let link = new Array(11);
for(let i=0;i<link.length;i++) link[i]=[];


/////////////////////////////////////////////////////////////////////////////////
//원형 큐 코드
const size = 6;
const cq = Array(size).fill(null);

let front = 0;
let rear = 0;

const isEmpty = () => rear === front;

const isFull = () => (rear + 1) % size === front;

const enqueue = (item) => {
  if (isFull()) {
    console.log("큐가 가득참");
    return;
  }
  cq[rear] = item;
  rear = (rear + 1) % size;
  return item;
};

const dequeue = () => {
  if (isEmpty()) {
    console.log("큐가 비어있음");
    return;
  }
  const item = cq[front];
  cq[front] = null;
  front = (front + 1) % size;
  return item;
};

/* 큐의 가장 앞에있는 요소를 얻음 */
const peek = () => cq[front];

/* 큐의 모든 요소가 null이 될때까지 dequeue를 실행 */
const clear = () => {
  while (true) {
    if (!dequeue()) break;
  }
  front = rear;
};


/////////////////////////////////////////////////////////////////////////////////

//특정 문자 개수 세기
const str = "동.해-물.과 백ㄷ.산ㅇ- 동- 동. 동 해 물";
const chars = [".", ",", "-", "동", "해", "물", "과", "백", "산", "ㄷ", "ㅇ"];
console.log(". 개수 :", str.match(/\./g)?.length);
console.log(", 개수 :", str.match(/\,/g)?.length);
console.log("- 개수 :", str.match(/\-/g)?.length);
console.log("동 개수 :", str.match(/동/g)?.length);
console.log("해 개수 :", str.match(/해/g)?.length);

//정규식 연습 문제




//객체 배열 선언
let arr = new Array(5).fill('lol');
let arr2 = new Array(5).fill({ test: 'a' });
// or if you want different objects
let arr3 = new Array(5).fill().map((_, i) => ({ id: i }));



//객체 키 검사
let obj={};
if(k in obj){
  
}



//객체 순회
const keys = Object.keys(obj) // ['name', 'weight', 'price', 'isFresh']

for (let i = 0; i < keys.length; i++) {
  const key = keys[i] // 각각의 키
  const value = obj[key] // 각각의 키에 해당하는 각각의 값

  console.log(value)
}

const values = Object.values(obj) //val
// values === ['melon', 4350, 16500, true]

const entries = Object.entries(obj) // key,val
/*
entries === [
  ['name', 'melon'],
  ['weight', 4350],
  ['price', 16500],
  ['isFresh', true]
]
*/

const obj = {
  name: 'melon',
  weight: 4350,
  price: 16500,
  isFresh: true
}

for (let key in obj) {
  const value = obj[key]

  console.log(key)
  console.log(value)
}



//자바스크립트 입력받기
https://velog.io/@exploit017/%EB%B0%B1%EC%A4%80Node.js-Node.js-%EC%9E%85%EB%A0%A5-%EB%B0%9B%EA%B8%B0

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
//객체복사
Object.assign(dest, [src1, src2, src3...]) //dest는 목표로 하는 객체, src는 복사하고자 하는 객체


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

  //줄바꿈 없는 출력
  process.stdout.write();
  


  //C++

  //vector assign
  long long row = maxY - minY + 1;
  long long col = maxX - minX + 1;
  string temp(col, '.');
  answer.assign(row, temp);
  for (int i = 0; i < loc.size(); i++) {
      long long y = loc[i].first;
      long long x = loc[i].second;
      answer[maxY - y][x - minX] = '*';
  }


  //2차원 vector 초기화
  vector<vector<lld>> D(p, vector<lld>(p, LINF));


  //  정리  
  //  https://velog.io/@bgg01578/Javascript-%EB%AC%B8%EB%B2%95%EC%A0%95%EB%A6%AC-1