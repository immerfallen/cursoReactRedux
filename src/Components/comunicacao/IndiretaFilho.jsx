import React from "react";

export default (props) => {
    const cb = props.quandoClicar
    return (
    <div>
      <div>Filho</div>
      <button onClick={_ => cb('Joao', 53, true)}>Fornecer informações</button>
    </div>
  );
};
