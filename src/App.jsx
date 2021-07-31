import ReactDom from "react-dom";
import React from "react";
import "./App.css";
import Primeiro from "./Components/basicos/Primeiro";
import ComParam from "./Components/basicos/ComParametro";
import Fragmento from "./Components/basicos/Fragamento";
import Aleatorio from "./Components/basicos/Aleatorio";
import Card from "./Components/layout/Card";

export default () => (
  <div className="App">
    <h1>Fundamento de React</h1>

    <div className="Cards">
      <Card titulo="Desafio aleatório" color="#2e003e">
        <Aleatorio minimo={10} maximo={20} />
      </Card>
      <Card titulo="Primeiro Componente" color="#3d2352">
        <Primeiro />
      </Card>
      <Card titulo="Com parâmetro" color="#3d1e6d">
        <ComParam titulo="Situação do aluno" aluno="Maro" nota={9.3} />
      </Card>
      <Card titulo="Com parâmetro 2" color="#8874a3">
        <ComParam titulo="Situação do aluno" aluno="Maria" nota={6.3} />
      </Card>
      <Card titulo="Fragmento" color="#e4dcf1">
        <Fragmento />
      </Card>
    </div>
  </div>
);
