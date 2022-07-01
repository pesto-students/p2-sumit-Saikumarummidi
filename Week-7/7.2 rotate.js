class sllNode
  {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }

let head = null;

function createSll(array){
  head = new sllNode(array[0]);
  let curr = head;
  for(let i = 1; i<array.length; ++i){
    curr.next = new sllNode(array[i]);
    curr = curr.next;
  }
}

function traverseSLL(){
  let curr = head;
  while(curr !== null){
    console.log(curr.value);
    curr = curr.next;
  }
}

function rotate(k)
{
    if (k == 0)
        return;
  
    let curr = head; 
    let count = 1;
 
    while (count < k && curr != null)
    {
        curr = curr.next;
        count++;
    }

    if (curr == null)
        return;
 
    let kthNode = curr;
 
    while (curr.next != null)
        curr = curr.next;

    curr.next = head;

    head = kthNode.next;
 
    kthNode.next = null;
}


let array = [2,4,7,8,9];

createSll(array);
rotate(3);
traverseSLL();