import ReactDom from "react-dom";
import React from "react";
import "./App.css";
import Primeiro from "./Components/basicos/Primeiro";
import ComParam from "./Components/basicos/ComParametro";
import Fragmento from "./Components/basicos/Fragamento";
import Aleatorio from "./Components/basicos/Aleatorio";
import Card from "./Components/layout/Card";
import Familia from "./Components/basicos/Familia";

export default () => (
  <div className="App">
    <h1>Fundamento de React</h1>

    <div className="Cards">
      <Card titulo="# 04 - Desafio aleatório" color="#2e003e">
        <Aleatorio minimo={10} maximo={20} />
      </Card>
      <Card titulo="#05 - Componente com filhos" color="#C956F7">
        <Familia sobrenome="Justino"/>
      </Card>
      <Card titulo=" #01 - Primeiro Componente" color="#3d2352">
        <Primeiro />
      </Card>
      <Card titulo="#02 - Com parâmetro" color="#3d1e6d">
        <ComParam titulo="Situação do aluno" aluno="Maro" nota={9.3} />
      </Card>
      <Card titulo="# 02 - Com parâmetro 2" color="#8874a3">
        <ComParam titulo="Situação do aluno" aluno="Maria" nota={6.3} />
      </Card>
      <Card titulo=" # 03 - Fragmento" color="#e4dcf1">
        <Fragmento />
      </Card>
    </div>
  </div>
);
