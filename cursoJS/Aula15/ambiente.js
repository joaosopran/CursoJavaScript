let  num = [5,8,2,9,3]
num.push(1)
num.sort() // para ordenar em ordem os numeros
console.log(num)
console.log(`o vetor tem ${num.length} posições `)
console.log(`o primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(4) // num.indexOf para localizar um valor em um array

if (pos == -1 ) {
    console.log('o valor nao foi encontrado!')
} else {
    console.log(`o valor 8 está na posição ${pos}`)
}


