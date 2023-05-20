var num = 0;
var d1 = document.querySelector('#di1');
var d2 = document.querySelector('#di2');
var d3 = document.querySelector('#di3');
var d4 = document.querySelector('#di4');
var d5 = document.querySelector('#di5');
var d6 = document.querySelector('#di6');
var d7 = document.querySelector('#di7');
var d8 = document.querySelector('#di8');
var d9 = document.querySelector('#di9');
function checkWin(player) {
    if (
      // Horizontal lines
      (d1.innerText === player && d2.innerText === player && d3.innerText === player) ||
      (d4.innerText === player && d5.innerText === player && d6.innerText === player) ||
      (d7.innerText === player && d8.innerText === player && d9.innerText === player) ||
      // Vertical lines
      (d1.innerText === player && d4.innerText === player && d7.innerText === player) ||
      (d2.innerText === player && d5.innerText === player && d8.innerText === player) ||
      (d3.innerText === player && d6.innerText === player && d9.innerText === player) ||
      // Diagonal lines
      (d1.innerText === player && d5.innerText === player && d9.innerText === player) ||
      (d3.innerText === player && d5.innerText === player && d7.innerText === player)
    ) {
      alert("Player " + player + " wins!");
      if(player=='O'){
      document.getElementById('emp').innerText = "Congratulations Player 1 you win!!!";
    }
    else{
        document.getElementById('emp').innerText = "Congratulations Player 2 you win!!!";
    }
}
  }
function div1() {
    num++;
    let temp = (num%2!=0) ? 'O' : 'X';
    document.getElementById('di1').innerText = temp ;
    let col = (temp=='O') ? '#18BC9C' : 'white';
    document.getElementById('di1').style.color =col;
    checkWin(temp);
}
function div2() {
    num++;
    let temp = (num%2!=0) ? 'O' : 'X';
    document.getElementById('di2').innerText = temp ;
    let col = (temp=='O') ? '#18BC9C' : 'white';
    document.getElementById('di2').style.color =col;
    checkWin(temp);
}
function div3() {
    num++;
    let temp = (num%2!=0) ? 'O' : 'X';
    document.getElementById('di3').innerText = temp ;
    let col = (temp=='O') ? '#18BC9C' : 'white';
    document.getElementById('di3').style.color =col;
    checkWin(temp);
}
function div4() {
    num++;
    let temp = (num%2!=0) ? 'O' : 'X';
    document.getElementById('di4').innerText = temp ;
    let col = (temp=='O') ? '#18BC9C' : 'white';
    document.getElementById('di4').style.color =col;
    checkWin(temp);
}
function div5() {
    num++;
    let temp = (num%2!=0) ? 'O' : 'X';
    document.getElementById('di5').innerText = temp ;
    let col = (temp=='O') ? '#18BC9C' : 'white';
    document.getElementById('di5').style.color =col;
    checkWin(temp);
}
function div6() {
    num++;
    let temp = (num%2!=0) ? 'O' : 'X';
    document.getElementById('di6').innerText = temp ;
    let col = (temp=='O') ? '#18BC9C' : 'white';
    document.getElementById('di6').style.color =col;
    checkWin(temp);
}
function div7() {
    num++;
    let temp = (num%2!=0) ? 'O' : 'X';
    document.getElementById('di7').innerText = temp ;
    let col = (temp=='O') ? '#18BC9C' : 'white';
    document.getElementById('di7').style.color =col;
    checkWin(temp);
}
function div8() {
    num++;
    let temp = (num%2!=0) ? 'O' : 'X';
    document.getElementById('di8').innerText = temp ;
    let col = (temp=='O') ? '#18BC9C' : 'white';
    document.getElementById('di8').style.color =col;
    checkWin(temp);
}
function div9() {
    num++;
    let temp = (num%2!=0) ? 'O' : 'X';
    document.getElementById('di9').innerText = temp ;
    let col = (temp=='O') ? '#18BC9C' : 'white';
    document.getElementById('di9').style.color =col;
    checkWin(temp);
}
