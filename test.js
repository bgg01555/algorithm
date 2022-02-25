// var result = sum(1,3); 
// var sum = function(num1, num2){
//    return console.log(num1+num2);
// }



// var result = undefined; 
// var sum = undefined; 
// result = sum(1,3);  // 후에 이렇게 위에 선언된 변수들에 초기화가 이루어집니다.
// sum = function(num1, num2){ // 마찬가지입니다.
//    return console.log(num1+num2);
// }
// console.log(result);



// // 어떤게 찍힐거같으신가요 ? 당연히 olaf 이겠죠
// console.log(name);  // 하지만 예상과 다르게 값은 undefined 입니다...
// var name = 'olaf';
// var age = 27;



// var name = undefined;
// var age = undefined;
// name = 'olaf'; // 후에 초기화가 이뤄지기 떄문이에요
// age = 27



// var result = sum(1,3); // 놀랍게도 이 때는 실행이됩니다! 
// function sum(num1, num2){ // var sum 같은 표현식이아닌 함수 선언식으로 되어있기 때문에 함수가 그대로 끌어올려집니다.
//    return console.log(num1+num2);
// }



// var foo;
// console.log(foo);// foo is not a function
// foo = function() {
// 	console.log('출력');
// };
