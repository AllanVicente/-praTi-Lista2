/* 9. Conversão Entre Formatos

Escreva duas funções:
    -> ○ paresParaObjeto(pares) recebe um array de pares [ [chave,
    valor], … ] e retorna o objeto equivalente.

    -> ○ objetoParaPares(obj) faz o inverso, retornando um array de
    pares. */

function paresParaObjeto(pares) {
    return Object.fromEntries(pares);
}

function objetoParaPares(obj) {
    return Object.entries(obj);
}

function main() {
    const pares = [["nome", "Allan"], ["idade", 30], ["cidade", "Capão Bonito"]];
    
    const obj = paresParaObjeto(pares);
    console.log("Objeto:", obj);
    
    const paresDeNovo = objetoParaPares(obj);
    console.log("Pares:", paresDeNovo);
}

main();
