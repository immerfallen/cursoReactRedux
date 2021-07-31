import React from "react";
import produtos from "../../data/produto";
import './TableProdutos.css'

export default (props) => {
  const list = produtos.map((produto, i) => {
    return (
      <tr key={produto.id} className={i%2===0 ? "Par" : ""}>
        <td>{produto.id}</td>
        <td>{produto.descricao}</td>
        <td>R$ {produto.preço}</td>
      </tr>
    );
  });

  return (
    <div className="TableProdutos">
      <table style={{width: "100%"}}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Descrição</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
    </div>
  );
};
