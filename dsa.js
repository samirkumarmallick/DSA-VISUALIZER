class Stack{

constructor(){
this.items=[];
}

push(element){
this.items.push(element);
}

pop(){
return this.items.pop();
}

display(){
return this.items;
}
}

class Queue{

constructor(){
this.items=[];
}

enqueue(element){
this.items.push(element);
}

dequeue(){
return this.items.shift();
}

display(){
return this.items;
}
}

let stack=new Stack();
let queue=new Queue();