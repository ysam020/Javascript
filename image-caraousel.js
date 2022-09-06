 const imgArr = ['./bg-1.jpeg', './bg-2.jpeg', './bg-3.jpeg', './bg-4.jpeg'];
let currentImage = 0;

document.getElementById('right-arrow').onclick = next;
document.getElementById('left-arrow').onclick = prev;

 function next(){
    currentImage++;
    if(currentImage > imgArr.length - 1){
        currentImage = 0;
    }
    document.getElementById('slide-img').src = imgArr[currentImage];
 }

 function prev(){
    autoSlide = false;
    currentImage--;
    if(currentImage < 0 ){
        currentImage = imgArr.length - 1;
    }
    document.getElementById('slide-img').src = imgArr[currentImage];
 }

 setInterval(next, 3000);