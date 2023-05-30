window.onload = function(){
    register.addEventListener('click',function(){
        let name = document.getElementById('username').value;
        let major = document.getElementById('major').value;

        let trNode = document.createElement('tr');
        let tdNode1 = document.createElement('td');
        let tdNode2 = document.createElement('td');

        let nameNode = document.createTextNode(name);
        let majorNode = document.createTextNode(major);

        
        tdNode1.appendChild(nameNode);
        tdNode2.appendChild(majorNode);

        trNode.appendChild(tdNode1);
        trNode.appendChild(tdNode2);
        
        let tbody = document.querySelector('tbody');

        tbody.appendChild(trNode);
    })
}