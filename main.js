var puntos = 0;
var time = 36;

var number1;
var number2;

var puntos_view = document.getElementById('puntos_view');
var time_view = document.getElementById('time_view');
var img = document.getElementById("img");
var div = document.getElementById("div");

setInterval(() =>{
    time --;
    time_view.innerHTML = time;

    if(time == 0){
        alert('Perdistes');
        time = 35;
        puntos = 0;
    }
}, 1000)

function randomPosition(){
    puntos ++;
    puntos_view.innerHTML = puntos;

    if(puntos == 30){
        alert("Ganastes!!")
        puntos = 0;
        time = 35;
    }

    number1 = Math.round(Math.random()*500);
    number2 = Math.round(Math.random()*500);

    img.style.marginTop = number1 + 'px';
    img.style.marginLeft = number2 + 'px';
}

img.addEventListener('click', () =>{
    randomPosition()
})

