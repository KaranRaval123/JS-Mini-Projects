let tasks = [];

document.querySelector(".add-btn").addEventListener("click", function() {
  let task = document.querySelector("#text").value;
  tasks.push(task);
  
  let parentPara = document.querySelector("#parent-para");
  parentPara.innerHTML = "";
  
  tasks.forEach(function(task) {
    let newPara = document.createElement("p");
    newPara.textContent = task;
    parentPara.appendChild(newPara);
  });
  console.log(tasks);

});
