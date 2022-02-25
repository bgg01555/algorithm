//const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const input = require('fs').readFileSync('입력.txt').toString().trim().split('\r\n');

let [n, p] = input[0].split(' ').map(x => +x);

let stack = new Array(7);
for (let i = 0; i < stack.length; i++) stack[i] = [];

let ans = 0;
for (let i = 1; i <= n; i++) {
    let [ln, pn] = input[i].split(' ').map(x => +x);
    let back;
    while (stack[ln].length && (back = stack[ln].slice(-1)) > pn) {//손가락 떼기
        ans++;
        stack[ln].pop();
    }
    if (back != pn) {
        ans++;//손가락 누르기       
        stack[ln].push(pn);
    }
}
console.log(ans);