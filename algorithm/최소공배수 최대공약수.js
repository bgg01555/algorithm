const input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');

//최대공약수
let gcd = (n1, n2) => {
    while(n2>0){
        let temp;
		n1 %= n2;

		temp = n1;
		n1 = n2;
		n2 = temp;
    }
    return n1;
}

//최소공배수
let lcm = (n1, n2) => {
	return n1 * n2 / gcd(n1, n2);
}

let [n,m]=input[0].split(' ').map(x=>+x);
console.log(gcd(n,m),lcm(n,m));