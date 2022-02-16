const input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
class PriorityQueue {
    constructor() {
        this.values = []
    }
    enqueue(val) {
        this.values.push(val)
        this.bubbleUp()
    }

    bubbleUp() {
        var idx = this.values.length - 1
        const element = this.values[idx]
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2)
            let parent = this.values[parentIdx]
            if (element[2] > parent[2]) break
            this.values[parentIdx] = element
            this.values[idx] = parent
            idx = parentIdx
        }
    }

    dequeue() {
        const max = this.values[0]
        const end = this.values.pop()
        if (this.values.length > 0) {
            this.values[0] = end
            // trickle down
            this.sinkDown()
        }
        if (max) return max
        else return [];
    }
    sinkDown() {
        let idx = 0
        const length = this.values.length
        const element = this.values[0]
        while (true) {
            let leftChildIdx = 2 * idx + 1
            let rightChildIdx = 2 * idx + 2
            let leftChild, rightChild
            let swap = null

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx]
                if (leftChild[2] < element[2]) {
                    swap = leftChildIdx
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx]
                if (
                    (swap === null && rightChild[2] < element[2]) ||
                    (swap !== null && rightChild[2] < leftChild[2])
                ) {
                    swap = rightChildIdx
                }
            }

            if (swap === null) break
            this.values[idx] = this.values[swap]
            this.values[swap] = element

            idx = swap
        }
    }
}

const q = new PriorityQueue();
let n = +input[0];

let lectures=[];
let ans=0;
for(let i=1;i<=n;i++){
    let [num,st,ed]=input[i].split(' ').map(x=>+x);
    lectures.push([num,st,ed]);
}
lectures.sort((a,b)=>{
    if(a[1]>b[1])return 1;
    else return -1;
})

for(let i=0;i<lectures.length;i++){
    let temp = q.dequeue();
    if(temp.length===0){
        q.enqueue(lectures[i]);
        ans = q.values.length >ans?q.values.length:ans;
        continue;
    }

    if(temp[2]>lectures[i][1]){
        q.enqueue(lectures[i]);
        q.enqueue(temp);
        ans = q.values.length >ans?q.values.length:ans;
    }
    else{
        q.enqueue(lectures[i]);
    }
}
console.log(ans);