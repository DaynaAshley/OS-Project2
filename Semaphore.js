class Semaphore{
    constructor(count) {
        this.count = count;
        this.queue = [];
        this.ready=[];
        this.space=count;
        this.constant=count;
      }
      semWait(x) {
        this.count=this.count-1;
        let chairs=document.querySelector('#chairs'+this.space);
        this.space--;
        if (this.count>=0){
            let d=document.querySelector('#client'+x);
            d.style.backgroundColor="green";

            d.remove();
            chairs.innerHTML="";
            chairs.appendChild(d);
           // console.log("space",this.space);
            
        }        
       
        if (this.count<0){
            this.space=this.constant;
            let d=document.querySelector('#client'+x);
            d.style.backgroundColor="yellow";
            d.style.color="black";
            this.queue.push(x);
        }
        
      }

      semSignal(x,time){
          console.log("signal",this.count);
          let d=document.querySelector('#client'+x);

          this.count=this.count+1; 
          
          setTimeout(function(){
              d.style.backgroundColor="red";
              setTimeout(function(){
                    let chairs=d.parentElement;
                    d.remove();

                  
                    chairs.innerHTML="Available Chair";
                    this.space--;
                },time)
            },time);
            
        if (this.count<=0){
            this.ready=this.queue;
        }
        
      }
}

document.addEventListener('DOMContentLoaded', () => {
    let start= document.querySelector('.sbtn');
    
    
    start.addEventListener('click', () =>{ 
        let p=document.querySelector('#process').value;
        let n=document.querySelector('#sem').value;

        let s=new Semaphore(n);
    
        for (let a=1;a<=p;a++){
            setTimeout(function(){s.semWait(a,n);},4000);
        }

        setTimeout(function(){
            let k=p-s.queue.length;
            for(let b=1;b<=k;b++){
                s.semSignal(b,(Math.floor(Math.random() * (6000 - 1000 + 1)) + 1000));
            }
          
            ;},8000);

        
      ;
        setTimeout(function(){
           
            let index=0;
            let te=0;
            let tr=0;
          while(s.ready.length!=0){
                console.log("Final count",s.ready);
               if (tr!=0 || te==0){
                for (let r=1;r<=n;r++){   
                    te++;
                    if (document.querySelector('#chairs'+r).innerHTML=="Available Chair"){
                        let d=document.querySelector('#client'+s.ready[index]);
                        //console.log(s.ready[a]);
                        let chair=document.querySelector('#chairs'+r);
                        chair.innerHTML="";
                        chair.append(d);
                        d.style.backgroundColor="green";
                        let time=Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;
                        setTimeout(function(){
                            d.style.backgroundColor="red";
                            tr=setTimeout(function(){
                                d.remove();
                                chair.innerHTML="Available Chair";
                            },time);
                        },time);

                    }
                    console.log("timer",te);
                    s.ready.shift();
               
                }
            }
            
            }        
        },21000);

    });