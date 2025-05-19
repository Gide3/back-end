const strings = ["Banana","Maça","tomate","Goiaba"]
const numeros = [20, 40 ,80 ,10]

//Final
strings.push("Abacate")
console.log(strings)

//Começo
strings.unshift("Jaca")
console.log(strings)

//Adicionar ou remover do meio
strings.splice(3,1)
console.log(strings)

strings.splice(3,0,"Pêra","Uva")
console.log(strings)

//remover ultimo
strings.pop()
console.log(strings)