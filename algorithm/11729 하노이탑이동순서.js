// const [...arr] = require('fs').readFileSync('입력.txt').toString().trim().split('\r\n');
const input = require('fs').readFileSync('입력.txt').toString().trim().split('\n');

let cnt = 1;
let ans = '';
function hanoi(from, temp, to, size) {
    if (size == 0) return;
    hanoi(from, to, temp, size - 1)
    ans = ans + from + ' ' + to + '\n';
    hanoi(temp, from, to, size - 1);
}

for (let i = 0; i < +input[0] - 1; i++) {
    cnt = cnt * 2 + 1;
}

hanoi(1, 2, 3, +input[0]);
console.log(cnt);
console.log(ans);