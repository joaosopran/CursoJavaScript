function carregar () {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`

if (hora >= 0 && hora < 12) {
    // bom dia
    img.src = 'manha grande.png'
    document.body.style.background = 'orange' // para mudar a cor do fundo de acordo com o valor da variavel
} else if (hora >=12 && hora < 18) {
    // boa tarde
    img.src = 'tarde grande.png'
    document.body.style.background = 'yellowgreen'
} else {
    // boa noite
    img.src = 'noite grande.png'
    document.body.style.background = 'gray'
}
}