import ReactDom from 'react-dom'
import React from 'react'
import './index.css'
import Primeiro from './Components/basicos/Primeiro'
import ComParam from './Components/basicos/ComParametro'
import Fragmento from './Components/basicos/Fragamento'

const el = document.getElementById('root')


ReactDom.render( 
    <div>
        <Primeiro/>
        <ComParam titulo='Situação do aluno' aluno='Maro' nota={9.3}/>
        <ComParam titulo='Situação do aluno' aluno='Maria' nota={6.3} />
        <Fragmento/>

    </div>, 
    el 
    )