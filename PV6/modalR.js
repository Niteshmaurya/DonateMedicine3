const trigger = document.querySelector('#trigger');
const trigger2 = document.querySelector('#trigger2');
const modalWrapper = document.querySelector('.modalWrapper');
const closeBtn = document.querySelector('.close');

trigger.addEventListener('click',function(){
    openModal();
})
trigger2.addEventListener('click',function(){
    openModal();
})

closeBtn.addEventListener('click',function(){
    closeModal();
})

modalWrapper.addEventListener('click',function(e){
    if(e.target !== modalWrapper) return;
    closeModal();
});

document.addEventListener('keydown',function(e){
    if(e.key === 'Escape'){
        closeModal();
    }
})

function openModal(){
    modalWrapper.classList.add('active')
}
function closeModal(){
    modalWrapper.classList.remove('active')
}


// ****************************************** 

