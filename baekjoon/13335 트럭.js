const input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\r\n');

let [n, w, l] = input[0].split(' ').map(x => +x);
let arr = input[1].split(' ').map(x => +x).reverse();
let queue = [];
let total = 0, timer = 0;
while (arr.length) {
    timer++;
    let now = arr.pop();
    if (queue.length && timer - queue[0][0] === w) {
        total -= queue.shift()[1];
    }
    if (total + now <= l) {
        queue.push([timer, now]);
        total += now;
    }
    else arr.push(now);
}
console.log(timer + w);