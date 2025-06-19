/*2. Jogo de Adivinhação

    Escreva um script que gere um número aleatório de 1 a 100 e peça ao
    usuário, para adivinhar. Use while para repetir até acertar, contando
    tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado. 

*/

const prompt = require('prompt-sync')();

function gerarNumero() {
    return Math.floor(Math.random() * 100) + 1;
}

function receberPalpite() {
    const valor = Number(prompt("Seu palpite (1-100): "));

    if (!Number.isInteger(valor)) {
        return null;
    }

    if (valor < 1 || valor > 100) {
        return null;
    }

    return valor;
}

function advinharNumero() {
    const numeroSecreto = gerarNumero();
    let tentativas = 0;

    console.log("Adivinhe o número entre 1 e 100!");

    while (true) {
        const palpite = receberPalpite();

        if (palpite === null) {
            console.log("Entrada inválida. Digite um número inteiro entre 1 e 100.");
            continue;
        }

        tentativas++;

        if (palpite < numeroSecreto) {
            console.log("Mais alto!");
        } else if (palpite > numeroSecreto) {
            console.log("Mais baixo!");
        } else {
            console.log(`Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativa(s).`);
            break;
        }
    }
}

function main() {
    advinharNumero();
}

main();
