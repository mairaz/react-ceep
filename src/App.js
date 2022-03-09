import './App.css';
import FormCadastro from './components/FormCadastro'
import ListaNotas from './components/ListaNotas';
import './App.css'
import { Component } from 'react';

class App extends Component {

  constructor(){
    super()
    this.state ={
      notas: []
    }
  }

  criarNota(texto, titulo){    
    const novaNota = {texto, titulo}
    const novoArray = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArray    
    }
    this.setState(novoEstado)
    console.log(this.state.notas)
     
  }
  
  render(){
    return (  
      <section className='conteudo'>
        <FormCadastro criarNota= {this.criarNota.bind(this)} />
        <ListaNotas notas={this.state.notas}/>
      </section>
  );
  }
  
}

export default App;
