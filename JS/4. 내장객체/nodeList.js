window.onload = function(){

    btn1.addEventListener('click', function(){
        let pNode1 = document.createElement('p');
        let textNode1 = document.createTextNode('Java');
        
        pNode1.appendChild(textNode1);
    
        let body = document.querySelector('body');
    
        let p1 = document.querySelector('p');
    
        body.insertBefore(pNode1, p1);
    
        let pNode2 = document.createElement('p');
        let textNode2 = document.createTextNode('Oracle');
        
        let p2 = document.querySelectorAll('p')[1];
    
        pNode2.appendChild(textNode2);
    
        body.insertBefore(pNode2, p2);
    
        let pNode3 = document.createElement('p');
        let textNode3 = document.createTextNode('JSP/Servlet');
    
        pNode3.appendChild(textNode3);
    
        body.appendChild(pNode3);
    
        let pNode4 = document.createElement('p');
        let textNode4 = document.createTextNode('Spring');
    
        pNode4.appendChild(textNode4);
    
        body.appendChild(pNode4);
        
    })

}