

let counter = 0;
function count(){
    counter ++;
    document.querySelector('h1').innerHTML = counter;
    /*if ( counter % 10 === 0){
        alert(counter);
    }*/

}  

document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('button').onclick =count;
    setInterval(count,1000);
})
function hello(){
    var heading = document.querySelector('h2');
    if 
    (document.querySelector('h2').innerHTML==="Hello!"){
    document.querySelector('h2').innerHTML="Good Bie !";
    }else {
        document.querySelector('h2').innerHTML="Hello!";
    }
    
    /*alert("Hello");*/
}

