export type Item = {
    key: number;
    val: number;
}

class LRUCache {

    private stack: Item[] = [];
    private capacity: number = 0;

    constructor(capacity: number) {
        this.capacity = capacity;
    }

    get(key: number): number {
        const index = this.stack.findIndex(item => item.key === key);
        if(index === -1){
            return -1;
        }else{
            const returnVal = this.stack[index].val;
            this.stack.push(this.stack.splice(index, 1)[0]);
            return returnVal;
        }
    }

    put(key: number, value: number): void {
        const index = this.stack.findIndex(item => item.key === key);
        if(index === -1){
            if(this.stack.length === this.capacity){
                this.stack.shift();
            }
            this.stack.push({key: key, val: value})
        }else{
            this.stack[index].val = value;
            this.stack.push(this.stack.splice(index, 1)[0]);
        }
    }
}

// Runtime
// 1520 ms
// Beats
// 21.43%
// Memory
// 100.1 MB
// Beats
// 71.43%