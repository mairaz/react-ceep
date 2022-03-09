import React, { Component } from 'react';
import './estilo.css'

class CardNotas extends Component{

    render(){
        return(
            <section className='card-nota'>
                <header className='card-nota_cabecalho'>
                    <h3 className='card-nota_titulo'>{this.props.titulo}</h3>
                </header>
                <div className='card-nota_texto'>
                  <p>{this.props.texto}</p>  
                </div>
                
            </section>
        )
    }
}

export default CardNotas