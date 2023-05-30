/* 
    1. 화면이 모두 로드 된 이후 실행
        window.onload = function(){...}

    2. 버튼을 생성, div 선택
        document.getElementById('id')

    3. 로또 번호 생성
        임의의 번호 생성
        parseInt(Math.random()*50)+1

    4. 버튼을 클릭하면 div에 번호를 출력
        div.innerHtml = `<div calss= 'ball'>${num}</div>`;
*/

// 1. 화면이 모두 로드 된 이후 실행
window.onload = function(){
    console.log('화면이 모두 로딩 되었습니다.');

    // 2. 버튼을 생성, div 선택
    let btn1 = document.getElementById('btn1');
    
    let lottoDiv = document.querySelector('div[class=lottoDiv]');

        // 3. 버튼이 클릭되면 div 초기화
        btn1.onclick = function(){
            lottoDiv.innerHTML = '';
            // 4. 로또 번호 생성
            var nums = [parseInt(Math.random()*45)+1,parseInt(Math.random()*45)+1,parseInt(Math.random()*45)+1,
                parseInt(Math.random()*45)+1,parseInt(Math.random()*45)+1];
            

            
            // 5. 버튼을 클릭하면 div에 번호를 출력
            for(let i=0; i < nums.length; i++){
                lottoDiv.innerHTML += "<div class = 'ball'>"+nums[i]+"</div>";
            }

            // 색상변경
            let ballList = document.querySelectorAll('div[class=ball]');

            for(let i=0; i < ballList.length; i++){
                let color = getColor();
                
                ballList[i].style.backgroundColor = color;
                ballList[i].style.borderColor = color;
            }
        }

}

function getColor(){
    var r = parseInt(Math.random()*256);
    var g = parseInt(Math.random()*256);
    var b = parseInt(Math.random()*256);
                
    return `rgb(${r}, ${g}, ${b})`;
}
