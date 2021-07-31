import React from 'react'
import FamiliaMembro from './FamiliaMembro'

export default props => {
    return (
        <div>
            <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome}/>
            <FamiliaMembro nome="Maro" sobrenome={props.sobrenome}/> 
            <FamiliaMembro nome="Ricardo" sobrenome="Silva"/>

        </div>
    )
}