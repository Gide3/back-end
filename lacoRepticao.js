const lanches = ["x-egg", "x-ovo", "x-bacon", "x-salada", "x-frango"];
const precos = [12, 15, 15, 20, 12];
const tamanho = lanches.length
let contador = 0;

while(contador < tamanho ){
    console.log(lanches [contador] + " - R$" + precos [contador])
    contador = contador + 1;
}
