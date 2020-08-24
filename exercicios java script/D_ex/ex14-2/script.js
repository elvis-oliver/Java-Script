function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 22 //new data.getHours()
    
    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `Agora são ${hora} horas <p>BOM DIA!</p>`
        img.src = '01-manha.png'
        window.document.body.style.background= '#fce48e'
    } else if (hora > 12 && hora <= 18) {
        msg.innerHTML = `Agora são ${hora} horas <p>BOA TARDE!</p>`
        imagem.src = '02-tarde.png'
        window.document.body.style.background = '#c85304'
    } else {
        msg.innerHTML = `Agora são ${hora} horas <p>BOA NOITE!</p>`
        imagem.src = '03-noite.png'
        window.document.body.style.background = '#162647'
    }
}