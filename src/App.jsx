import ReactDom from "react-dom";
import React from "react";
import "./index.css";
import Primeiro from "./Components/basicos/Primeiro";
import ComParam from "./Components/basicos/ComParametro";
import Fragmento from "./Components/basicos/Fragamento";
import Aleatorio from './Components/basicos/Aleatorio'

export default () => (
  <div id="app">
    <h1>Fundamento de React</h1>
    <Aleatorio minimo={10} maximo={20}/>
    <Primeiro />
    <ComParam titulo="Situação do aluno" aluno="Maro" nota={9.3} />
    <ComParam titulo="Situação do aluno" aluno="Maria" nota={6.3} />
    <Fragmento />
  </div>
);
