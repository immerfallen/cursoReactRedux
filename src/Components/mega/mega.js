function numerosMega(qtd) {
  let numeros = [];
  for (let i = 0; i < qtd; i++) {
    const numero = parseInt(Math.random() * 60);
    if (numeros[i] != numero) {
      numeros.push(numero);
    }
  }
  return numeros.sort((n1,n2) =>{
      return n1-n2
  });
}

console.log(numerosMega(6));

//Outra forma de fazer

/* function gerarNumeroNaocontido(min, max, array) {
  const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;
  return array.includes(aleatorio)
    ? gerarNumeroNaocontido(min, max, array)
    : aleatorio;
}

function gerarNumeros(qtdade) {
  const numeros = Array(qtdade)
    .fill(0)
    .reduce((nums) => {
        const novoNumero = gerarNumeroNaocontido(1,60, nums)
        console.log([...nums,novoNumero])
        return [...nums, novoNumero]
    }, []);
}

gerarNumeros(5) */
