function move(){
    var red =document.getElementById('red-box');
    var poe = 0;
    var anim = setInterval(animate,5);//set interval function is calling move function in every 5 milliseconds
     function animate(){
        if(poe==350){
            clearInterval;
        }
        else{
        poe ++;
        red.style.top = poe+"px";
        red.style.left = poe+"px";
     }
    }
}