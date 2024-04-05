function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[erro]')
    } else {

        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                // criança
                img.setAttribute('src', 'jovem.jpg') // para carregar a imagem
            } else if (idade < 21) {
                // jovem
            } else if (idade < 50) {
                // adulto
            } else {
                // idoso
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // criança
            } else if (idade < 21) {
                // jovem
            } else if (idade < 50) {
                // adulto
            } else {
                // idoso
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img) // para mostrar a imagem abaixo
    }




}