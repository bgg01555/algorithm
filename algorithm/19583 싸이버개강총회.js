const input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\r\n');

function toMinute(time) {
    let [h, m] = time.split(':');
    return (+h) * 60 + (+m);
}

let [start, end1, end2] = input[0].split(' ').map(x => toMinute(x));
let check = {};
let ans = 0;

for (let i = 1; i < input.length; i++) {
    let [time, name] = input[i].split(' ');
    time = toMinute(time);
    if (time <= start) check[name] = true;
    if (time >= end1 && time <= end2 && check[name]) {
        check[name] = false;
        ans++;
    }
}
console.log(ans);

