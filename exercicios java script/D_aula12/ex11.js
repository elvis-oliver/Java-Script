var horacerta = new Date()
var hora = horacerta.getHours()
console.log(`AGORA SÃO EXATAMENTE: ${hora} HORAS`)
if (hora <= 5) {
    console.log('BOA MADRUNGA!')
} else if (hora < 12) {
    console.log('BOM DIA FLOR DO DIA')
} else if (hora < 18) {
    console.log('BOA TARDE IRMANDADE')
} else {
    console.log('GOOD NIGHT')
}