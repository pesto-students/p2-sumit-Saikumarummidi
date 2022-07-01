class Queue {
	constructor() {
		this.stack1 = [];
		this.stack2 = [];
	}
       
	enqueue(value) {
		this.stack1.push(value);
	}

	dequeue() {
		while(this.stack1.length > 0) {
			this.stack2.push(this.stack1.pop());
		}
        return this.stack2.pop();
    }
    
    enqueue(value) {
        
        for( let i = 0; i < this.stack2.length; i++) {
            this.stack1.push(this.last.pop());
        }
        this.stack1.push(value);
    }

    peek() {
        if(this.stack1.length > 0) {
            return this.stack1[0]
        }
        return this.stack2[this.stack2.length - 1]
    }

	}


    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(2);
    queue.enqueue(2);
    queue.enqueue(1);
    queue.enqueue(4);
    
    queue.dequeue();
    queue.dequeue();
    
    console.log(queue.peek());