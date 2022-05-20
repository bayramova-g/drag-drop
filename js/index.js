

const imgBox=document.querySelector('.img-box');
const dropItems=document.querySelectorAll('.item');


imgBox.addEventListener('dragstart',onDragStart);
// imgBox.addEventListener('drag',onDrag);
imgBox.addEventListener('dragend',onDragEnd);

function onDragStart(){

setTimeout(() => {
    this.classList.add("d-none");
}, 0);
}
// function onDrag()
// { console.log("drag ");
// }
function onDragEnd()
{  this.classList.remove("d-none");
}

dropItems.forEach(items => {
    items.addEventListener('dragenter',onDragEnter);
    items.addEventListener('dragover',onDragOver);
    items.addEventListener('dragleave',onDragLeave);
    items.addEventListener('drop',onDrop);
    
});

function  onDragEnter() {
 console.log(this,"this");
 this.classList.add("active");
}
function   onDragOver(e){
  e.preventDefault();
}
function   onDragLeave(){
    this.classList.remove("active");
}
function   onDrop(){
    this.classList.remove("active");

    this.append(imgBox);
}