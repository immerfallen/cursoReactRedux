import ReactDom from 'react-dom'
import React from 'react'
import './index.css'
import Primeiro from './Components/basicos/Primeiro'

const el = document.getElementById('root')


ReactDom.render( 
    <div>
        <Primeiro/>
    </div>, 
    el 
    )