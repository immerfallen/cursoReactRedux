import React from "react";

export default (props) => {
  const intervalo = props.maximo - props.minimo;
  const valorAleatorio = parseInt((Math.random() * intervalo + props.minimo));
  return (
    <div>
        <h1><strong>Valor aleatório</strong></h1>
        <h2>Valor mínimo : {props.minimo}</h2>
        <h2>Valor Valor máximo : {props.minimo}</h2>
        <h2>Valor escolhido : {valorAleatorio}</h2>      
    </div>
  );
};
