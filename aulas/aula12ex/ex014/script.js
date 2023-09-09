function carregar(){
var txt = document.getElementById('txt')
var img = document.getElementById('img')
var agora = new Date ()
var hora = agora.getHours()
txt.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora < 12){
    
}
}