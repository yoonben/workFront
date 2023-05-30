window.onload = function(){
    let btn1 =document.getElementById('bttn');
    
    // 버튼이 클릭되면 실행시킬 함수를 정의
    btn1.addEventListener('click',function(){
        //notiBox에 새로운 알림을 추가
        let noti = document.createElement('div');

        let notiText = document.createTextNode('알림내용 표시');

        noti.appendChild(notiText);
        // class 속성 추가
        noti.classList.add('noti');

        let noti_box = document.getElementById('noti-box');
        
        // 화면에 출력
        // 자식요소로 등록
        noti_box.appendChild(noti);

        // 3초 후 실행
        setTimeout(function(){

            // 요소 삭제
            noti.remove();

        }, 3000)
    })
}