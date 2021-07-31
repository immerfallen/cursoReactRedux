import React from "react";

export default (props) => {
  const numero = props.number;
  const par = numero % 2 === 0;
  return <div>{par ? <span>Par</span> : <span>Impar</span>}</div>;
};
