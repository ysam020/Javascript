const modalOverlay = document.getElementById('modal-overlay');
const modalBox = document.getElementById('modal-box');
const modalOpen = document.getElementById('modal-open');
const modalClose = document.getElementById('modal-close');

modalOpen.addEventListener('click', function(){
    modalOverlay.style.opacity = '1';
    modalOverlay.style.pointerEvents = 'all';
})

modalClose.addEventListener('click', function(event){
    modalOverlay.style.opacity = '0';
    modalOverlay.style.pointerEvents = 'none';
})