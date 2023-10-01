import React from 'react';
import './PokedexAll.css'

import Pokedex from '../../components/pokedex/Pokedex';

import { PokedataProps } from '../../types/PokedexProps';
import data from "../../data/Pokedata.json";

type TypographyProps =
{
  children: React.ReactNode,
  size?: number
};

const Title = ( { children , size = 3 }: TypographyProps) =>
{
  return(
    <h1
      style={{
        fontSize: size + "rem",
      }}
    >
    
      {children}
    
    </h1>
  )
};

type AppState = {
  Pokedata: PokedataProps[],
  searchedPokemon: PokedataProps[],
  selectedPokemon: PokedataProps | undefined
}

let missing = 
[
{  "id": 0,
  "name": {
    "english": "MissingNo",
    "japanese": "MissingNo",
    "chinese": "MissingNo",
    "french": "MissingNo"
  },
  "type": [
    "Not Found"
  ],
  "base": {
    "HP": 0,
    "Attack": 0,
    "Defense": 0,
    "Sp. Attack": 0,
    "Sp. Defense": 0,
    "Speed": 0
  }
}
] as PokedataProps[]

class PokedexAll extends React.Component<any, AppState > {

  state = {
    Pokedata: data,
    searchedPokemon: data,
    selectedPokemon: undefined
  };

  HandleInputChange = (inputValue: string) =>
  {
    const  { Pokedata } = this.state;
    
    let searchedPokemon = Pokedata.filter(
          ( pokemon ) => {
              return (
                pokemon.name.english  &&
                pokemon.name.english.toLowerCase().includes(inputValue.toLowerCase()) ||
                pokemon.type[0] &&
                pokemon.type[0].toLowerCase().includes(inputValue.toLowerCase()) ||
                pokemon.type[1] &&
                pokemon.type[1].toLowerCase().includes(inputValue.toLowerCase()) ||                
                pokemon.type[2] &&
                pokemon.type[2].toLowerCase().includes(inputValue.toLowerCase()) ||
                pokemon.id &&
                pokemon.id.toString().includes(inputValue)
              )
          }
      )

      if(searchedPokemon.length == 0)
        searchedPokemon = missing    
      

      this.setState({
        Pokedata: data,
        searchedPokemon: searchedPokemon
      });
  }

  HandleClick = (pokemonName: string) =>
  {
    const  { Pokedata } = this.state;
  
    console.log(pokemonName);

    const selectedPokemon = Pokedata.find((pokemon: PokedataProps) => 
        pokemon.name.english === pokemonName
    );

    console.log(selectedPokemon?.name);

    if(selectedPokemon == this.state.selectedPokemon)
      this.setState({selectedPokemon: undefined})
    else
      this.setState({selectedPokemon})
  }

  render(){    
    return (
        <main className='margin'>
          
          <br />
          <Title size = { 2 }>
            POKEDEX
          </Title>
          <br />

          <Pokedex 
            searchedPokemon={this.state.searchedPokemon} 
            selectedPokemon={this.state.selectedPokemon} 
            onPokeCardClick={this.HandleClick} 
            HandleInputChange={this.HandleInputChange}
          />
        </main>
    )      
  }
}

export default PokedexAll
