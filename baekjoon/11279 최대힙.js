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
            if (element < parent) break
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
        else return 0;
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
                if (leftChild >= element) {
                    swap = leftChildIdx
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx]
                if (
                    (swap === null && rightChild >= element) ||
                    (swap !== null && rightChild >= leftChild)
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
let ans = '';
for (let i = 1; i <= n; i++) {
    let num = +input[i];
    if (num) q.enqueue(num);
    else {
        let val = q.dequeue();
        if (!val) ans = ans + '0' + '\n';
        else ans = ans + val + '\n';
    }
}
console.log(ans);