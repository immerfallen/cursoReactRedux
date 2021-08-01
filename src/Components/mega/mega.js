function numerosMega(qtd) {
  let numeros = [];
  for (i = 0; i <= qtd; i++) {
    const numero = parseInt(Math.random() * 60);
    if (numeros[i] != numero) {
      numeros.push(numero);
    }
  }
  console.log(numeros);
}

numerosMega(10);
