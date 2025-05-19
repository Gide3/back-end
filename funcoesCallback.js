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