window.onload = function(){
    let modalbox = document.getElementById('modal-box');
    // let url = '6. 모달창.html'
    // let name = 'popup test';
    // let option = 'width : 500, height: 500, top : 100, left : 100';
    
    openBtn.addEventListener('click', function(){
        
        modalbox.classList.add('active');
        
    })

    closeBtn.addEventListener('click', function(){

        modalbox.classList.remove('active');

    });

}
