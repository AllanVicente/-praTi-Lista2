/*1. Validação de Datas

    Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
    formarem uma data real (meses de 28–31 dias, ano bissexto para
    fevereiro) e false caso contrário.

*/

const prompt = require('prompt-sync')();

function ehDataValida(dia, mes, ano) {
    if (dia <= 0 || mes <= 0 || mes > 12 || ano <= 0) {
        return false;
    }

    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Verifica ano bissexto
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        diasPorMes[1] = 29;
    }

    return dia <= diasPorMes[mes - 1];
}

function main() {
    const dia = Number(prompt("Digite o dia: "));
    const mes = Number(prompt("Digite o mês: "));
    const ano = Number(prompt("Digite o ano: "));

    // Verifica se todos os valores são inteiros válidos
    if (!Number.isInteger(dia) || !Number.isInteger(mes) || !Number.isInteger(ano)) {
        console.log("Erro: Digite apenas números inteiros.");
        return;
    }

    if (ehDataValida(dia, mes, ano)) {
        console.log(`A data ${dia}/${mes}/${ano} é válida.`);
    } else {
        console.log("Data inválida.");
    }
}

main();