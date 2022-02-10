//const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let tc = +input[0];
let idx = 1;
let ans = '';
for (let i = 0; i < tc; i++) {
    idx++;
    let sorted = input[idx++].split(' ').map(x => +x).sort((a, b) => b - a);
    let new_sorted = [];
    sorted.map((x, j) => {
        j % 2 ? new_sorted.push(x) : new_sorted.unshift(x);
    })
    let max_diff = Math.abs(new_sorted[0] - new_sorted.slice(-1));
    new_sorted.reduce((acc, cur) => {
        let diff = Math.abs(acc - cur);
        max_diff = diff > max_diff ? diff : max_diff;
        return acc = cur;

    })
    ans += max_diff + '\n';
}
console.log(ans);