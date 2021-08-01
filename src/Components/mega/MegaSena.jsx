import React, { useState } from "react";
import numerosMega from "./mega";

export default (props) => {
  function numerosMega(qtd) {
    let numeros = [];
    for (let i = 0; i < qtd; i++) {
      const numero = parseInt(Math.random() * 60);
      if ( numero !== numeros[i]  ) {
        numeros.push(numero);
      }
    }
    return numeros.sort((n1, n2) => {
      return n1 - n2;
    });
  }
  const [qtde, setQtde] = useState(props.qtd || 6);
  const numerosInicias = Array(qtde).fill(0);
  const [numeros, setNumeros] = useState(numerosInicias);
  

  return (
    <div>
      <h2>Mega</h2>
      <h3>{numeros.join(" ")}</h3>
      <div>
          <label >Quantidade de números</label>
          <input type="number" value={qtde} onChange={e => setQtde(parseInt(e.target.value))} />
      </div>
      <button onClick={_ => setNumeros(numerosMega(qtde))}>Gerar números</button>
    </div>
  );
};
