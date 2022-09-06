const counter = document.querySelector('.counter');
const buttons = document.querySelectorAll('.btn');
let count = 0;

buttons.forEach(function(btn){
    btn.addEventListener('click', function(i){
        const  btnClass = i.currentTarget.classList;
        if(btnClass.contains('decrease')){
            count--;
        }
        else if(btnClass.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }

        if(count > 0){
            counter.style.color = 'green';
        }
        if(count < 0){
            counter.style.color = 'red';
        }
        if(count === 0){
            counter.style.color = 'white';
        }

        counter.textContent = count;
    })
})