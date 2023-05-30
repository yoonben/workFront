window.onload = function(){
    let container = document.querySelector('#container');
    let order = document.querySelector('#order');
    let orderInfo = document.querySelector('#orderInfo');

    order.addEventListener('click', function(){

        let p = document.createElement('p');

        let innerText = document.querySelector('#container>h2').innerText;

        let textNode= document.createTextNode(innerText);

        p.appendChild(textNode);
        p.style.fontSize = '0.8em';
        p.style.color = 'blue';
        p.style.fontWeight = 800;
        orderInfo.appendChild(p);
        
    });
}