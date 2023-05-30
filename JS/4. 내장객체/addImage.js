window.onload = function(){
    
    let date = new Date();
    let horus = date.getHours();

    let container = document.querySelector('#container')
    // 이미지 노드 추가
    let imgNode = document.createElement('img');
    // 시간에 따라 이미지 경로 설정
    let imgSrc = (horus < 12) ? 'images/morning.jpg' : 'images/afternoon.jpg';
    // 이미지 속성 등록
    imgNode.src = imgSrc;

    // 컨테이너 박스의 자식으로 등록
    container.appendChild(imgNode);
}