const input = require('fs').readFileSync('입력.txt').toString().trim().split('\r\n');
let o = input[1].split(' ');
o = o.map(x => +x);
c = o.slice();
c.sort((a, b) => { return a - b; })
c = new Set(c);
c = [...c];

let dict = {};
let ans = '';
for (let i = 0; i < c.length; i++) dict[c[i]] = i;
for (let i = 0; i < o.length; i++)  ans += dict[o[i]] + ' ';
console.log(ans);