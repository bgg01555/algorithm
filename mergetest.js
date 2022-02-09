const input = require('fs').readFileSync('입력.txt').toString().trim().split('\r\n');

function merge(arr1, arr2) {

    let idx1 = 0;
    let idx2 = 0;
    let arr3 = [];
    while (idx1 != arr1.length && idx2 != arr2.length) {
        if (arr1[idx1] < arr2[idx2]) {
            arr3.push(arr1[idx1]);
            idx1++;
        }
        else {
            arr3.push(arr2[idx2]);
            idx2++;
        }

    }

    if (idx1 == arr1.length) {
        while (idx2 != arr2.length) {
            arr3.push(arr2[idx2]);
            idx2++;
        }
    }
    else if (idx2 == arr2.length) {
        while (idx1 != arr1.length) {
            arr3.push(arr1[idx1]);
            idx1++;
        }

    }

    return arr3;
}

function mergeSort(from, to, arr) {
    if (from == to) return [arr[from]];

    let a = mergeSort(from, parseInt((from + to) / 2), arr);
    let b = mergeSort(parseInt((from + to) / 2) + 1, to, arr);

    return merge(a, b);
}

let arr = [2, 4, -10, 4, -9];
input[0].split(' ');
arr = arr.map(x => +x);
console.log(mergeSort(0, arr.length - 1, arr));
