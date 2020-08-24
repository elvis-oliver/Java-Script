function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radiosex')
        var idade = ano - Number(fano.value)
        //res.innerHTML=`idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src','01-criança-m.png')
            } else if (idade < 21) {
                img.setAttribute('src','02-jovem-m.png')
            } else if (idade < 60) {
                img.setAttribute('src','03-adulto-m.png')
            } else {
                img.setAttribute('src','04-idoso-m.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','01-criança-f.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','02-jovem-f.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src','03-adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src','04-idoso-f.png')
            }
        }
        }
        res.innerHTML=`Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
