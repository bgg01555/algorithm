// const readline = require('readline');
// let input = [];
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.on('line', function (line) {
//     input.push(line.trim());
// })
// .on('close', function () {
// 	let n = +input[0];
// 	let link = new Array(n+1);
// 	let subTree = new Array(n+1).fill(0);
// 	for(let i=0;i<link.length;i++) link[i]=[];
// 	function dfs(x,vi,acc,subTree){
// 		let sumn=0;
// 		for(let i=0;i<link[x].length;i++){
// 			let next = link[x][i][0];
// 			let cost = link[x][i][1];
// 			if(!vi[next]){
// 				vi[next]=true;
// 				sumn += dfs(next,vi,acc+cost,subTree);
// 			}
// 		}
		
// 		let subs = 0;
// 		for(let i=0;i<link[x].length;i++){
// 			let next = link[x][i][0];
// 			subs+=subTree[next];
// 		}
// 		subTree[x]=subs+1;
		
// 		return sumn+acc;
// 	}
	
// 	function dfs2(x,vi,sumn){
// 		ans[x]=sumn;
// 		for(let i=0;i<link[x].length;i++){
// 			let next = link[x][i][0];
// 			let cost = link[x][i][1];
// 			if(!vi[next]){
// 				vi[next]=true;
// 				let tempSumn = sumn+(n-subTree[next])*cost-subTree[next]*cost;
// 				dfs2(next,vi,tempSumn);
// 			}
// 		}
// 	}
	
// 	let vi = new Array(n+1).fill(false);
// 	for(let i=0;i<n-1;i++){
// 		let [a,b,c] = input[i+1].split(' ').map(x=>+x);
// 		link[a].push([b,c]);
// 		link[b].push([a,c]);
// 	}
	
// 	vi[1]=true;
// 	let firSum = dfs(1,vi,0,subTree);
	
// 	vi.fill(false);
// 	vi[1]=true;
// 	let ans = new Array(n+1).fill(0);
// 	dfs2(1,vi,firSum);
// 	for(let i=1;i<ans.length;i++){
// 		console.log(ans[i]);
// 	}
	
// });


const input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let n = +input[0];
let link = new Array(n+5);
let subTree = new Array(n+5).fill(0);
for(let i=0;i<link.length;i++) link[i]=[];
function dfs(x,vi,acc,subTree){
	let sumn=0;
	for(let i=0;i<link[x].length;i++){
		let next = link[x][i][0];
		let cost = link[x][i][1];
		if(!vi[next]){
			vi[next]=true;
			sumn += dfs(next,vi,acc+cost,subTree);
		}
	}
	
	let subs = 0;
	for(let i=0;i<link[x].length;i++){
		let next = link[x][i][0];
		subs+=subTree[next];
	}
	subTree[x]=subs+1;
	
	return sumn+acc;
}

function dfs2(x,vi,sumn){
	ans[x]=sumn;
	for(let i=0;i<link[x].length;i++){
		let next = link[x][i][0];
		let cost = link[x][i][1];
		if(!vi[next]){
			vi[next]=true;
			let tempSumn = sumn+(n-subTree[next])*cost-subTree[next]*cost;
			dfs2(next,vi,tempSumn);
		}
	}
}

let vi = new Array(n+5).fill(false);
for(let i=0;i<n-1;i++){
	let [a,b,c] = input[i+1].split(' ').map(x=>+x);
	link[a].push([b,c]);
	link[b].push([a,c]);
}

vi[1]=true;
let firSum = dfs(1,vi,0,subTree);

vi.fill(false);
vi[1]=true;
let ans = new Array(n+5).fill(0);
dfs2(1,vi,firSum);
for(let i=1;i<ans.length;i++){
	console.log(ans[i]);
}
