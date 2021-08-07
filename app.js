
// for displaying images auto matically

let index=0;
 Display()

function prev(){
  index-=1;
//    console.log('prev')
}
function next(){
    index+=1;
    // console.log('next')
}

function Display(){
    let i=0;
    let x=document.getElementsByClassName('img1');
    let y=document.getElementsByClassName('img2');
    let z=document.getElementsByClassName('img3');
    for(i=0;i<x.length;i++){
        x[i].style.display='none';
        y[i].style.display='none';
        z[i].style.display='none'
    }
     index++;
    if(index>x.length || index<0){
        index=1;
    }
    x[index-1].style.display='block';
    y[index-1].style.display='block';
    z[index-1].style.display='block';
   
}

setInterval(() => {
    Display()
}, 5000);




// Side bar

let siedbar=document.querySelector('#sidebar')
siedbar.style.display='none'
function Close(){
    siedbar.style.display='none';
}
function Open(){
    siedbar.style.display='block';
}
console.log(siedbar)

