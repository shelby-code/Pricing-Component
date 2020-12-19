const toggle1 = document.querySelector('input');
const card1 = document.querySelector('.card1');
const basic = document.querySelector('.basic');
const professional = document.querySelector('.professional');
const master = document.querySelector('.master')
const button = document.querySelector('button');
const h1 = document.querySelector('h1');


toggle1.addEventListener('change', function(){
    if(basic.innerHTML == "$19.99" && professional.innerHTML == "$24.99" && master.innerHTML == "$39.99"){
        basic.innerHTML = "$199.99";
        professional.innerHTML = "$249.99";
        master.innerHTML = "$399.99"
    } else{basic.innerHTML = "$19.99";
    professional.innerHTML = "$24.99";
    master.innerHTML = "$39.99"}
})

