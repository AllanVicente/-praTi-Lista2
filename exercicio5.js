/* 5. Debounce

    Crie function debounce(fn, delay) que receba uma função fn e um delay
    em ms, retornando uma nova função que só executa fn se não for
    chamada novamente dentro do intervalo. */

function debounce(fn, delay) {
    let timer;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(fn, delay);
    };
}

function main() {
    function digaOi() {
        console.log("Oi!");
    }

    const debouncedOi = debounce(digaOi, 1000);


    debouncedOi();
    debouncedOi();

}

main();