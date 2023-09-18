function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    
    if (fano.value.leght ==0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = window.document.getElementById('img')
    } if (fsex[0].checked) {
        genero = 'homem'
        if(idade >=0 && idade < 10){
            img.src = 'homem-b.jpg'
        } else if (idade < 21){
            img.src = 'homem-j.jpg'
        } else if (idade < 50){
            img.src = 'homem-a.jpg'
        } else{
            img.src = 'homem-i.jpg'
        }
    } else if (fsex[1].checked){
        genero = 'mulher'
        if(idade >=0 && idade < 10){
            img.src = 'mulher-b.jpg'
        } else if (idade < 21){
            img.src = 'mulher-j.jpg'
        } else if (idade < 50){
            img.src = 'mulher-a.jpg'
        } else{
            img.src = 'mulher-i.jpg'
        }
    }
    
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
}