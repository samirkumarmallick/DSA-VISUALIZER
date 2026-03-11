let container=document.getElementById("visualization");

function clear(){
container.innerHTML="";
}

function showStack(){
clear();
stack.display().forEach(item=>{
let div=document.createElement("div");
div.className="stack-item";
div.innerText=item;
container.appendChild(div);
});
}

function showQueue(){
clear();
queue.display().forEach(item=>{
let div=document.createElement("div");
div.className="queue-item";
div.innerText=item;
container.appendChild(div);
});
}

function push(){
let val=document.getElementById("value").value;
stack.push(val);
showStack();
}

function pop(){
stack.pop();
showStack();
}

function enqueue(){
let val=document.getElementById("value").value;
queue.enqueue(val);
showQueue();
}

function dequeue(){
queue.dequeue();
showQueue();
}

function generateArray(){
clear();

for(let i=0;i<15;i++){
let value=Math.floor(Math.random()*200)+20;

let bar=document.createElement("div");
bar.classList.add("bar");
bar.style.height=value+"px";

container.appendChild(bar);
}
}

function sleep(ms){
return new Promise(resolve=>setTimeout(resolve,ms));
}

async function bubbleSort(){

let bars=document.querySelectorAll(".bar");

for(let i=0;i<bars.length;i++){

for(let j=0;j<bars.length-i-1;j++){

bars[j].style.background="red";
bars[j+1].style.background="red";

await sleep(100);

let h1=parseInt(bars[j].style.height);
let h2=parseInt(bars[j+1].style.height);

if(h1>h2){

bars[j].style.height=h2+"px";
bars[j+1].style.height=h1+"px";
}

bars[j].style.background="steelblue";
bars[j+1].style.background="steelblue";
}

bars[bars.length-i-1].style.background="green";
}
}