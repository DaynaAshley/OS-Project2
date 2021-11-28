"use strict";

document.addEventListener('DOMContentLoaded', () => {
    let okay= document.querySelector('.vbtn');
    
    okay.addEventListener('click', () => myFunction());
    
    let clear= document.querySelector('.cbtn');
    
    
    clear.addEventListener('click', () =>{ 
        let shop=document.querySelector('#shop');
        shop.innerHTML="";
        document.querySelector('#sem').value="";
        document.querySelector('#process').value="";
        document.querySelector('#clients').innerHTML="";
        document.querySelector('#chair').innerHTML="";
        document.querySelector('.type').innerHTML="";

    });

    function myFunction() {
        let type=document.querySelector('.type');
        
        let shop=document.querySelector('#shop');
        let n=document.querySelector('#sem').value;

        if (n==1||n==0){
            type.innerHTML="Binary Semaphore";
        }
        else{
            type.innerHTML="Counting Semaphore";
        }
        let chairs=document.querySelector('#chair');
   
        for (var i = 1; i <= n; i++) {
            var box = document.createElement("div");
            box.id= 'chairs'+i;
          
            box.innerHTML="Available Chair";
            chairs.appendChild(box);
        }

        for (var i = 1; i <= n; i++) {
            var box = document.createElement("div");
            box.id= 'barbers'+i;
            box.className="barbers";
            box.innerHTML="Barber "+i;
            shop.appendChild(box);
        }

        let clients=document.querySelector('#clients');
        let p=document.querySelector('#process').value;
        for (var i = 1; i <= p; i++) {
            var box = document.createElement("div");
            box.id= 'client'+i;
            box.className='client';
            box.innerHTML=i;
            clients.appendChild(box);
        }
}




});