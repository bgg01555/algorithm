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
