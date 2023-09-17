function carregar(){
var txt = window.document.getElementById('txt')
var img = window.document.getElementById('img')
var agora = new Date ()
var hora = agora.getHours()
txt.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora < 12){
    // BOM DIA!
    img.src = 'manhã.jpg'
    document.body.style.background = '#e2cd9f'
} else if (hora >= 12 && hora <= 18){
    // BOA TARDE!
    img.src = 'tarde.jpg'
    document.body.style.background = '#b9846f'
} else{
    // BOA NOITE!
    img.src = "noite.jpg"
    document.body.style.background = '#515154'
}
}