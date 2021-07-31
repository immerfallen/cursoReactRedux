import ReactDom from "react-dom";
import React from "react";
import "./index.css";
import Primeiro from "./Components/basicos/Primeiro";
import ComParam from "./Components/basicos/ComParametro";
import Fragmento from "./Components/basicos/Fragamento";
import Aleatorio from "./Components/basicos/Aleatorio";
import Card from "./Components/layout/Card";

export default () => (
  <div id="app">
    <h1>Fundamento de React</h1>

    <div className="cards">
      <Card titulo="Desafio aleatório">
        <Aleatorio minimo={10} maximo={20} />
      </Card>
      <Card titulo="Primeiro Componente">
        <Primeiro />
      </Card>
      <Card titulo="Com parâmetro">
        <ComParam titulo="Situação do aluno" aluno="Maro" nota={9.3} />
      </Card>
      <Card titulo="Com parâmetro 2">
        <ComParam titulo="Situação do aluno" aluno="Maria" nota={6.3} />
      </Card>
      <Card titulo="Fragmento">
        <Fragmento />
      </Card>
    </div>
  </div>
);
