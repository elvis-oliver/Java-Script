let num = window.document.querySelector('input#fnum')
let lista = window.document.querySelector('select#flista')
let res = window.document.querySelector('div#res')
let valores = []

function isNumero (n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList (n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adcionar () {
    if (isNumero(num.value) && !inList(num.value, valores)) {
        valores.push (Number(num.value))
        let item = window.document.createElement('option')
        item.text = `Valor ${num.value} Adcionado`
        lista.appendChild(item)
        res.innerHTML = ''
        
    } else {
        alert('Valor invalido ou ja encontrado na lista')
    }
    num.value=''
    num.focus()
}

function finalizar () {
    if (valores.length == 0) {
        alert('Adcione valores na lista')
    } else {
        let maior = valores [0]
        let menor = valores [0]
        var total = valores.length
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        media = soma / valores.length    
        res.innerHTML = ''
        res.innerHTML += `<p> Existem: ${total} valores </p>`
        res.innerHTML += `<p> O maior número digitado foi: ${maior} </p>`
        res.innerHTML += `<p> O menor número digitado foi: ${menor} </p>`
        res.innerHTML += `<p> A soma dos valores digitados é: ${soma} </p>`
        res.innerHTML += `<p> A média dos valores digitados é: ${media} </p>`
        }

     
    }
}