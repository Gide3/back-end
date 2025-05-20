function media(nota1, nota2){
    return (nota1+nota2)/2
}
console.log(media(5.2, 0))

mediaArrow = (nota1, nota2) => {
    return (nota1+nota2)/2
}
console.log(mediaArrow(10,9))

mediaArrowSimples = (nota1, nota2) => (nota1+nota2)/2
console.log(mediaArrowSimples(10,8))

const lista = ["Uno","Golf","Voyage","F1000"]
lista.forEach((carro) => console.log(carro))

console.log(lista.map((carro) => carro+"aaa"))

const numeros = [10,50,100,202,30]

//filter ->
const filtro = numeros.filter((n) => n < 100)
console.log(filtro)
const filtroLetra = lista.filter((carro) => carro[0] == "G")
console.log(filtroLetra)

//sort
const ordenado = lista.sort()
console.log(ordenado)
const numerosOrdenados = numeros.sort((a,b) => {
    if (a < b) {
        return -1;
    
    }
    if (a > b) {
        return 1;
    }
    return 0;
})
console.log(numerosOrdenados)
