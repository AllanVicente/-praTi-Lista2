/* 7. Mapeamento e Ordenação

    Dado um array produtos = [{ nome, preco }, …], crie uma função que
    retorne um novo array apenas com os nomes, ordenados por preço
    crescente, usando map, sort. */

function main() {
    const produtos = [
        { nome: "Resident Evil", preco: 40 },
        { nome: "Mario Kart", preco: 500 },
        { nome: "Cyberpunk 2077", preco: 120 },
        { nome: "GTA VI", preco: 500 },
    ];

    const nomes = produtos
        .sort((a, b) => a.preco - b.preco)
        .map(p => p.nome);

    console.log(nomes);
}

main();
