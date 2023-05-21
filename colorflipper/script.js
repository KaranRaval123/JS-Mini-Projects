flipcolor = () =>{
    document.getElementById('h').innerText="";
    let random = Math.floor(Math.random() * 16777215);
    console.log(random);
    let color = '#'+random.toString(16);
    document.body.style.backgroundColor = color;
    document.getElementById('h').innerText=color;
}
