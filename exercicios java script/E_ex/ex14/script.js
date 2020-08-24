function carregar (){
    var inicio = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var passo = window.document.getElementById('txtp')
    var res = window.document.getElementById('res')
    
    if (inicio.value.length==0 || fim.value.length==0 || passo.value.length==0) {
        alert('[ERRO] Faltam dados')
    } else {
        res.innerHTML="<br> CONTANDO: <br>"
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            alert('[ERRO] passo incorreto, considerando passo 1')
            p = 1
        }
        if (i < f) {
            for (var c = i; c <= f; c += p) {
            res.innerHTML+=`${c} \u{1F449}`    
            }
        } else {
            for (var c = i; c >= f; c-= p) {
                res.innerHTML+=`${c} \u{1F449}`
            }  
        }
        res.innerHTML+=`\u{1F3C1}`
    }

}