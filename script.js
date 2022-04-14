let list = document.querySelectorAll('.sci li');
let bg = document.querySelector('.socialMedia');


for(let item of list) {
    item.addEventListener('mouseenter', function(event){
        let color = event.target.getAttribute('data-color');
        bg.style.backgroundColor = color;
    })
}

for(let item of list) {
    item.addEventListener('mouseleave', function(event){
        let color = event.target.getAttribute('data-color');
        bg.style.backgroundColor = '#fff';
    })
}

//vanilla-tilt.min.js need connection for this script 

VanillaTilt.init(document.querySelectorAll(".sci li a"), {
    max: 30,
    speed: 400,
    glare:true,
    'max-glare':1,
});

