// 버튼에 onclicl = '함수명' 이벤트를 입력후
// 함수를 실행시키기 위해서 버튼을 클릭해야 합니다.
function typeTest() {
    // document.write('typeTest');
    // alert('typeTest');
    console.log('typeTest');

    // 변수를 선언시 사용되는 키워드
    // var,let, const(상수)

    // 숫자형 : 정수와 실수를 포함
    let age = 20;
    let height = 184.5;

    // 문자열 : 작은따음표, 큰따음표로 묶은 데잍
    let name = '문인수';
    let name1 = "문인수";
    let name2 = ""; // 빈문자열

    // 논리값 : true, false
    let check = false;

    // 박스 선택
    let area1 = document.getElementById("area1");
    // 박스에 값을 입력
    area1.innerHTML = '<h4>안녕하세요</h4>'
    area1.innerHTML += `name : ${name}, type: ${typeof { name }} <br><br>`
}

function typeTest2() {

    // 배열 선언
    let hobbies = ['축구', '농구', '야구'];
    let area2 = document.getElementById('area2');
    area2.innerHTML = '객체 테스트 <br>';
    area2.innerHTML += `hobbies : ${hobbies}, type: ${typeof { hobbies }} <br><br>`

    // 변수에 함수를 저장 할수 도 있고
    // 매개변수로 함수를 넘겨줄수도 있습니다!!!!

    //함수 선언
    // let testFunc = function(num1,num2){
    // 매개변수의 갯수가 일치하진 않은경우
    // , undefind로 초기화 되어 오류가 발생 =====>> 초기값 지정
    // 초기값 지정
    let testFunc = function (num1 = 0, num2 = 0) {
        console.log('num1 ' + num1);
        console.log('num2 ' + num2);
        return num1 + num2;
    }

    // 함수를 실행 : 변수이름(매개변수)
    console.log('testFunc', testFunc(10, 20));
    // 매개변수의 갯수가 일치하지 않아도 실행
    console.log('testFunc', testFunc());

    area2.innerHTML += `testFunc : ${testFunc},  type: ${typeof { testFunc }} <br><br>`

    // 객체타입
    let user = {
        /*  
            속성 : 값,
            속성 : 값, 
            ...
        */
        name: '문인수',
        age: 20,
        height: 185,
        id: 'test',
        hobbies: ['축구', '농구', '야구']
    }

    console.log(user);
    console.log(user.name);


    area2.innerHTML += `user : ${user},  type: ${typeof { user }} <br><br>`;
    area2.innerHTML += `null type: ${typeof (null)} <br><br>`;
    area2.innerHTML += `undefined type: ${typeof { undefined }} <br><br>`;
}

//  2. 데이터 형변환
//  1) 문자열과 숫자의 '+' dustks
//      문자형과 + 연산시 문자열 변경
//      그외의 연산시 숫자타입인 경우 숫자로 변환 하여 연산처리
function plusTest() {
    let area3 = document.getElementById('area3');

    let test1 = 7 + 7;      // 14
    let test2 = '7' + 7;    // '77'
    let test3 = 7 + 7 + '7';    // '147'
    let test4 = 7 + '7' + 7;    // '777'

    let test5 = 7 * '7';    // 49
    let test6 = '7' - 3;    // 4
    let test7 = '7' * '7';  // 49
    let test8 = '7' * 'a';  // nall

    area3.innerHTML = `test1 : ${test1} <br><br>`
    area3.innerHTML += `test2 : ${test2} <br><br>`
    area3.innerHTML += `test3 : ${test3} <br><br>`
    area3.innerHTML += `test4 : ${test4} <br><br>`
    area3.innerHTML += `test5 : ${test5} <br><br>`
    area3.innerHTML += `test6 : ${test6} <br><br>`
    area3.innerHTML += `test7 : ${test7} <br><br>`
    area3.innerHTML += `test8 : ${test8} <br><br>`
}

function castingTest() {
    let area4 = document.getElementById("area4");

    area4.innerHTML = `${2 + '3'} <br>`; // 23
    area4.innerHTML += `${2 + Number('3')} <br>`;  // 5
    area4.innerHTML += `${String('2') + Number('3')} <br>`;  //23
    area4.innerHTML += `${2 + parseInt('3')} <br>`;
    area4.innerHTML += `${2 + parseFloat('3')} <br>`;

    // 16진수를 10진수로 변환
    // ff : 255
    area4.innerHTML += `${parseInt('ff', 16)}`
}

function opTest() {
    let area5 = document.getElementById('area5');

    area5.innerHTML = '"==" 연산자 테스트 <br>'
    area5.innerHTML += ` 7 == 7 : ${7 == 7} <br>`
    area5.innerHTML += ` 7 == '7' : ${7 == '7'} <br>`
    area5.innerHTML += ` 7 != '7' : ${7 != '7'} <br>`
    area5.innerHTML += ` '7' != '7' : ${'7' != '7'} <br><br>`

    area5.innerHTML += '"===" 연산자 테스트 <br>'
    area5.innerHTML += ` 7 === 7 : ${7 === 7} <br>`
    area5.innerHTML += ` 7 === '7' : ${7 === '7'} <br>`
    area5.innerHTML += ` 7 !== '7' : ${7 !== '7'} <br>`
    area5.innerHTML += ` '7' !== '7' : ${'7' !== '7'} <br><br>`
}

function forTest() {
    //1~10 까지 수를 담고 있는 배열 arry
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    for (i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
    console.log('for ============================');

    // for(변수 in 객체){}
    // 반복 변수에 array의 index를 순서대로 담아서 반복시킨다

    for (let i in array) {
        console.log(array[i]);
    }

    let student = {
        name: '고경희',
        age: 20,
        class: '1'
    }

    // 객체의 속성, 속성값을 출력
    for (key in student) {
        console.log(key, student[key])
        // 객체명.속성명 -> 속성명을 알고 있을때 사용
        // 속성명이 key인 요소를 탖는데 없으니깐 undefined
        //  console.log(key, student.key); --> Err
    }
    console.log('for in ============================');

    // 배열.forEach(function)
    // 배열의 요소를 함수의 매개변수로 전달
    array.forEach(function (num) {
        console.log(num);
    });

    console.log('forEach========================');

    let j = 0;

    while (true) {

        j++;
        // 짝수이면 출력
        
        if (j % 2 == 0) {
            console.log(j);
            continue; 
        }

        if (j > 5) {
            break;
        }
    }
    console.log('while========================');

    //
    for(let iterator of array){
        console.log(iterator);
    }
};