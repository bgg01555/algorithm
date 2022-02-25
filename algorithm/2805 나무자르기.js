// const [...arr] = require('fs').readFileSync('입력.txt').toString().trim().split('\r\n');
const input = require('fs').readFileSync('입력.txt').toString().trim().split('\n');

let [N, M] = input[0].split(' ').map(x => +x);
let woods = input[1].split(' ').map(x => +x);
function cutoff(H) {
    return woods.reduce((acc, cur) => {
        if (cur > H) acc += cur - H;
        return acc;
    }, 0)
}

function binarySearch(left, right) {
    while (left + 1 != right) {
        let mid = parseInt((left + right) / 2);
        if (cutoff(mid) >= M) left = mid;
        else right = mid;
    }
    return left;
}

console.log(binarySearch(0, Math.max(...woods)));
