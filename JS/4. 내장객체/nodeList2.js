window.onload = function () {

    btn1.addEventListener('click', function(){
        
        let liNode1 = document.createElement('li');
        let javaNode = document.createTextNode('Java');
    
        liNode1.appendChild(javaNode);
    
        let ul = document.querySelectorAll('ul')[0];
    
        let li1 = document.querySelectorAll('li')[0];
    
        ul.insertBefore(liNode1, li1);
    
        let liNode2 = document.createElement('li');
        let oracleNode = document.createTextNode('Oracle');
    
        liNode2.appendChild(oracleNode);
    
        let li2 = document.querySelectorAll('li')[1];
    
        ul.insertBefore(liNode2, li2);
    
        let liNode3 = document.createElement('li');
        let servlettNode = document.createTextNode('JSP/Servlet');
    
        liNode3.appendChild(servlettNode);
    
        ul.appendChild(liNode3);
    
        let liNode4 = document.createElement('li');
        let springNode = document.createTextNode('Spring');
    
        liNode4.appendChild(springNode);
    
        ul.appendChild(liNode4);
    })


}