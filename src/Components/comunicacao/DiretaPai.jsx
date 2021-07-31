import React from 'react'
import Filho from './DiretaFilho'

export default props => {
    return (
        <div>
            <Filho texto="Olá" numero={3.14} bool={true}></Filho>
        </div>
    )
}
