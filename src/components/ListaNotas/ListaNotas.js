import React, { Component } from 'react';
import CardNotas from '../CardNotas'
import './estilo.css'

class ListaNotas extends Component{

    render(){
        return(
            <ul className='lista-notas'>
                {this.props.notas.map((item, index )=>{
                  return ( <li className='lista-notas_item' key={index}> 
                    <CardNotas titulo = {item.titulo} texto = {item.texto} />
                </li> )
                })}
               
            </ul>
        )
    }
}

export default ListaNotas