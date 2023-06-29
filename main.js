let items= document.querySelectorAll('.tabs .tab');
let content_items= document.querySelectorAll('.cont-item')
console.log(content_items);


console.log(items);
function select(e){
    removeborder();
    removeShow();
    this.classList.add('tab-border')
    document.querySelector(`.${this.id}-content`).classList.add('show')
}

function removeShow(){
content_items.forEach(item=>{
    item.classList.remove('show')
})
}

function removeborder(){
    items.forEach(item=>{
        item.classList.remove('tab-border')
    })
}
items.forEach(item=>{
    item.addEventListener('click',select)
})
