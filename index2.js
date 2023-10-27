const seconds =document.querySelector(".seconds");
const minute=document.querySelector(".minute");
const hour=document.querySelector("h1");
const mnum=document.querySelector('span')
const para=document.querySelector('.date')


for(let i=0;i<60;i++){
    console.log(i)
    let min=document.createElement('i');
    let sp=document.createElement('i');
   sp.className="spark"
   min.className="spark2"
 
   sp.setAttribute('data-i',i)
   sp.style=`--drotate:${6*i}deg`
    // sp.style=`transform: rotate(${6*i}) translateX(170px)`;
  
   seconds.append(sp)
   min.setAttribute('data-i',i)
   min.style=`--drotate:${6*i}deg`
    // sp.style=`transform: rotate(${6*i}) translateX(170px)`;
  
   minute.append(min)

}



function time(){
    let date=new Date()
    sec=date.getSeconds();
    mins=date.getMinutes();
    hr=date.getHours()
    mnum.innerText=mins
    hour.innerHTML=hr
    // para.innerText=date
    
    if(sec===0){
        seconds.style=`--rotate:${0}deg`
        console.log("h");
    seconds.classList.add('start')
    seconds.classList.remove('start')
       
    }else{
        seconds.classList.remove('start')
        seconds.classList.add('start')
        seconds.style=`--rotate:${6*sec}deg`
       
       
    }
    

    minute.style=`--rotate:${6*mins}deg`
   
   
}
time();
setInterval(time,1000);


