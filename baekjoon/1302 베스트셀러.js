// const [...arr] = require('fs').readFileSync('입력.txt').toString().trim().split('\r\n');
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let o = {};

for (let i = 0; i < +input[0]; i++) {
    if (input[i + 1] in o) o[input[i + 1]]++;
    else o[input[i + 1]] = 1;
}

const ans = Object.entries(o).sort((a, b) => {
    if (a[1] === b[1]) {
        return a[0] > b[0] ? 1 : -1
    }
    return b[1] > a[1] ? 1 : -1
})

console.log(ans[0][0]);