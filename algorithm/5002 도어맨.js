//const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\r\n');

let ans = 0;
let X = +input[0];
let line = input[1].split('').reverse();
let club = [];


while (club.length <= X && line.length != 0) {
    let fir = line.pop();
    let sec = line.length ? line.pop() : null;

    if (club.length) {
        let top = club.slice(-1);
        if (top != fir) {
            club.pop();
            ans++;
            if (sec) line.push(sec);
            continue;
        }
        else if (sec != null && top != sec) {
            club.pop();
            ans++;
            line.push(fir);
            continue;
        }
    }
    ans++;
    club.push(fir);
    if (sec) line.push(sec);
}
if (club.length > X) ans--;
console.log(ans);