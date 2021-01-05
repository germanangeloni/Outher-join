import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     Pokemones: ['Pikachu','Charmander']
    }
    this.cambioPokemon = this.cambioPokemon.bind(this);
  }
  render() {
    return (
      <div>
        <p><select multiple value={this.state.Pokemones} onChange={this.cambioPokemon}>
        <option>Pikachu: Es un pokemon electrico nivel 4 que pude hacer impacktrueno daño 40 pts</option> 
        <option>Wartortle: Wartortle es una tortuga de color azul índigo, con una pomposa cola, orejas con forma de aleta, y un caparazón de color café oscuro.</option>
        <option>Charmander: Charmander es un pequeño lagarto bípedo. Sus características de fuego son resaltadas por su color de piel anaranjado y su cola con la punta envuelta en llamas.</option>
        <option>Bulbasaur: es un Pokémon de tipo planta/veneno </option>
        <option>Jigglypuff: tiene un cuerpo globular, rosa, esponjoso y acentuado con pequeños apéndices, así como una mota de cabello en su cabeza, tiene unos enormes ojos azules y unas orejas puntiagudas.</option>
        <option>Pidgey: es uno de los Pokémon más comunes, ya que se encuentra siempre en cualquier sitio. Suele estar en bandadas</option>
        <option>hitmonchan: Sus puñetazos cortan el aire. Son tan veloces que el mínimo roce podría causar una quemadura.</option>
        </select></p>
       Pokemon seleccionado:{this.state.Pokemones.map((elemento)=>{
          return (<p>{elemento}</p>)
        }
        )}
      </div>
    );
  }

  cambioPokemon(e) {
    const opciones = e.target.options;
    const seleccionadas = [];
    for (let i = 0; i < opciones.length; i++) {
      if (opciones[i].selected) {
        seleccionadas.push(opciones[i].value);
      }      
    }    
    this.setState({
      Pokemones: seleccionadas
    })
  }
}

export default App;