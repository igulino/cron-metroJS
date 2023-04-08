const bots = document.getElementById('bots');
var medida = true
var bunda = 55
var baka = 0

setInterval(() => {
    if (!medida) {
        bunda++
        contagem()
    }
}, 1000);

start.onclick = () =>{
    medida = false
}
reset.onclick = () =>{
    bunda = 0
    baka = 0
    mostrar.innerText =  bunda
}
pause.onclick = () =>{
    medida = true
}

function contagem() {
    console.log(bunda);
    if (bunda == 60) {
        baka++
        bunda = 0
    }
    min.innerText = baka
    mostrar.innerText = bunda
}
