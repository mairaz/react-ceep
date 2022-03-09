import React, { Component } from 'react';
import './estilo.css'

class FormCadastro extends Component{
    constructor(props){
        super(props)
        this.titulo = ''
        this.texto =''
    }

    _handleMudancaTitulo(evento){        
        this.titulo = evento.target.value      
    }
    _handleMudancaTexto(evento){
        this.texto = evento.target.value        
    }

    _criarNota(evento){
        evento.preventDefault();
        evento.stopPropagation()
        this.props.criarNota(this.texto, this.titulo)
    }

    render(){
        return(
            <form className='form-cadastro' onSubmit={this._criarNota.bind(this)}>
                <input type='text' className='form-cadastro_input' onChange={this._handleMudancaTitulo.bind(this)}/>
                <textarea rows='10' className='form-cadastro_input'onChange={this._handleMudancaTexto.bind(this)}></textarea>
                <button type='submit' className='form-cadastro_submit' >Adicionar</button>
            </form>
        )
    }
}
export default FormCadastro