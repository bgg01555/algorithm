//const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const input = require('fs').readFileSync('입력.txt').toString().trim().split('\r\n');
let n = +input[0];
function recur(size) {
    if (size === 3) {
        return ['  *  ', ' * * ', '*****'];
    }
    let arr = [];
    for (let i = 0; i < 2; i++) {
        let spaceLength = size / 2;
        for (let j of recur(size / 2)) {
            if (i == 0) {
                arr.push(' '.repeat(size / 2) + j + ' '.repeat(size / 2));
                continue;
            }
            arr.push(j + ' '.repeat(1) + j);
        }
    }
    return arr;
}

let ans = '';
for (i of recur(n)) {
    console.log(i);
}
console.log(ans);