import React from 'react'

export default (props) => {
    const intervalo = (props.maximo - props.minimo) 
    const valorAleatorio = (Math.random()*intervalo + props.minimo).toFixed(2)
    return (
        <div>
            <p>{valorAleatorio}</p>
        </div>
    )
}
