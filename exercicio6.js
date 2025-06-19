/* 6. Memoization

    Implemente function memoize(fn) que armazene em cache chamadas
    anteriores de fn (por argumentos), retornando resultados instantâneos em
    repetidas invocações. */

function memoize(fn) {
    const cache = {};
    return function(arg) {
        if (arg in cache) {
            return cache[arg];
        }
        return (cache[arg] = fn(arg));
    };
}

function main() {
    function quadrado(n) {
        console.log("Calculando...");
        return n * n;
    }

    const quadradoMemo = memoize(quadrado);

    console.log(quadradoMemo(5)); 
    console.log(quadradoMemo(5)); 
}

main();
