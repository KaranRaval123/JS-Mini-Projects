let input = document.getElementById("inputtext");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click",function(){
  if(input.value.length>0){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li);
    input.value='';
    }
})
