let list = document.querySelectorAll('.sci li');
let bg = document.querySelector('.socialMedia');


for(let item of list) {
    item.addEventListener('mouseenter', function(event){
        let color = event.target.getAttribute('data-color');
        bg.style.backgroundColor = color;
    })
}
