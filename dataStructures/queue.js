class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val){
        let node = new Node(val);
        if(!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        return ++this.size
    }
    dequeue(){
        if (!this.first) return null;
        let removed = this.first;
        if(this.first === this.last){
            this.first = null;
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return removed;
    }
}