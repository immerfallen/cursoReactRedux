import "./Contador.css";
import React, { Component } from "react";
import Display from "./Display";
import Botoes from "./Botoes";
import PassoForm from "./PassoForm";

export default class Contador extends Component {
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 1,
  };

  /* constructor (props) {  ------>>>>> Outra forma de fazer o setState referenciar ao objeto atual é chamar o método bind no construtor
      super(props)

      this.inc = this.inc.bind(this)
  } */

  inc = () => {
    /*Transformada a funcao inc() para uma arrow function para que o setState referencia ao objeto atual */
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  };

  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  };
  /*Também é possível fazer da seguinte forma:
    constructor (props) {
        super(props)
        this.state = {
            numero: props.numeroInicial
        }
    */

  alterarPasso = (novoPasso) => {
    this.setState({
      passo: parseInt(novoPasso),
    });
  };
  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <Display numero={this.state.numero} />
        <PassoForm passo={this.state.passo} alterarPasso={this.alterarPasso}/>
        <Botoes incrementar={this.inc} decrementar={this.dec} />

        {/* ao chamar o this.inc sem ter definido uma arrow function, o this do setState nao apontava para o objeto atual, gerando um erro de undefined object */}
      </div>
    );
  }
}

// Pode-se exportar por default tambem aqui no final --->> export default Contador
