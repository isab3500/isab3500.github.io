total = 0
function spil() {
kast = Math.floor(6*Math.random()+1)
if(kast == 1) {
terning.src = 'ener.png'
beloeb = -30
}
else if(kast ==2) {
terning.src = 'toer.png'
beloeb = -20
}
else if(kast ==3) {
terning.src = 'treer.png'
beloeb = -10
}
else if(kast == 4) {
terning.src = '4.png'
beloeb = 0
}
else if(kast == 5) {
terning.src = '5.png'
beloeb = 10
}
else {
terning.src = 'sekser.png'
beloeb = 50
}
total = total + beloeb;
document.getElementById('gevinst').innerHTML = beloeb;
document.getElementById('totalgevinst').innerHTML = total;
}
