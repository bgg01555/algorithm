const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');


function makeArray(size) {
    let arr = new Array(size).fill([]);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(size).fill('*');
    }
    return arr;
}
function fillSpace(arr, size, x, y) {
    for (let i = x; i < x + size; i++) {
        for (let j = y; j < y + size; j++) {
            arr[i][j] = ' ';
        }
    }
}
function starPrintRecur(arr, size, x, y) {

    if (size == 3) {
        arr[x + 1][y + 1] = ' ';
        return;
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (i == 1 && j == 1) {
                fillSpace(arr, size / 3, x + (size / 3) * i, y + (size / 3) * j);
                continue;
            }
            starPrintRecur(arr, size / 3, x + (size / 3) * i, y + (size / 3) * j);
        }
    }
}

let size = +input;
let arr = makeArray(size);
starPrintRecur(arr, size, 0, 0);

let ans = '';
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        ans += arr[i][j];
    }
    ans += '\n';
}
console.log(ans);