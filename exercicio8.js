/* 8. Agrupamento por Propriedade

    Em vendas = [{ cliente, total }, …], use reduce para gerar um objeto onde
    cada chave é um cliente e o valor é a soma de todos os seus total. */

function main() {
    const vendas = [
        { cliente: "José", total: 100 },
        { cliente: "Maria", total: 150 },
        { cliente: "João", total: 200 },
        { cliente: "Maria", total: 50 },
    ];

    const agrupado = vendas.reduce((acc, venda) => {
        acc[venda.cliente] = (acc[venda.cliente] || 0) + venda.total;
        return acc;
    }, {});

    console.log(agrupado);
}

main();
