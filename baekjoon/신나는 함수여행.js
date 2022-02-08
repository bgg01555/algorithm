const input = require('fs').readFileSync('입력.txt').toString().trim().split('\r\n');

let vi = [];
function makeArray() {
    for (let i = 0; i < 21; i++) {
        vi.push([]);
        for (let j = 0; j < 21; j++) {
            vi[i].push([]);
            for (let k = 0; k < 21; k++) {
                vi[i][j].push(null);
            }
        }
    }
}

function w(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) return 1;
    if (a > 20 || b > 20 || c > 20) {
        if (vi[20][20][20] != null) return vi[20][20][20];
        return vi[20][20][20] = w(20, 20, 20);
    }

    if (vi[a][b][c] != null)
        return vi[a][b][c];

    if (a < b && b < c)
        return vi[a][b][c] =
            w(a, b, c - 1)
            + w(a, b - 1, c - 1)
            - w(a, b - 1, c);
    else
        return vi[a][b][c] =
            w(a - 1, b, c)
            + w(a - 1, b - 1, c) +
            + w(a - 1, b, c - 1)
            - w(a - 1, b - 1, c - 1);
}
makeArray();

let ans = '';
for (let i = 0; i < input.length; i++) {
    let [a, b, c] = input[i].split(' ');
    a = +a; b = +b; c = +c;
    if (a == -1 && b == -1 && c == -1) break;
    ans += `w(${a}, ${b}, ${c}) = ` + w(a, b, c) + '\n';
}
console.log(ans);