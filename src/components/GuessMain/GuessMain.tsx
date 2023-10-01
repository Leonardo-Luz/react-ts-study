import React from 'react';
import './GuessMain.css'

import data from "../../data/Pokedata.json"
import { PokedataProps } from '../../types/PokedexProps';

import Guess from '../Guess/Guess';
import Who from '../Who/Who';

let randomNum = Math.floor(Math.random() * data.length);

let count = 0;

const newRand = () =>
{
    randomNum = Math.floor(Math.random() * data.length);
}

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

type GuessState = {
    Pokedata: PokedataProps[],
    searchedPokemon: PokedataProps[],
    selectedQuery: string | undefined,
    query: string
}

class GuessMain extends React.Component<any, GuessState > 
{

    state = {
        Pokedata: data,
        searchedPokemon: data,
        selectedQuery: undefined,
        query: ""
    };

    HandleInputChange = (inputValue: string) =>
    {
      const  { Pokedata } = this.state;
      
      let searchedPokemon = Pokedata.filter(
            ( pokemon ) => {
                return (
                  pokemon.name.english  &&
                  pokemon.name.english.toLowerCase().includes(inputValue.toLowerCase()) ||
                  pokemon.id &&
                  pokemon.id.toString().includes(inputValue)
                )
            }
        )
  
        this.setState({
          Pokedata: data,
          searchedPokemon: searchedPokemon,
          query: inputValue
        });
    }

    HandleClick = ( PokeId: number ) =>
    {
        if(PokeId == randomNum)
        {
            count++;
        }
        else
        {
            count = 0;
        }
        
        newRand();

        let inputClean = document.getElementById("search") as HTMLInputElement;
        inputClean.value = "";

        this.setState({
            query: ""
        });
    }
    
    ListRender = ( data: PokedataProps[] ) =>
    {
        let list_ = [] as React.ReactNode[];
    
        data.forEach(element => {
            list_.push(<label id={element.id.toString()} onClick={() => { this.HandleClick(element.id) } } >{element.name.english}</label>)
        })
    
        return list_;
    }

    render()
    {

        return (
    


            <main className='margin'>
              
              <br />
              <Title size = { 1.4 }>
                Quem é este Pokemon ?
              </Title>
              <br />
    
                <Guess onInputChange = { this.HandleInputChange }/>

                {this.state.query != "" && this.state.searchedPokemon.length > 0 && (
                    <label id='drop-down'>
                        { this.ListRender(this.state.searchedPokemon) }
                    </label>
                )}

                <Who rand={randomNum}/>
                
                <br />
                <p>Count: {count}</p>
            </main>
        )      
    }
}

export default GuessMain
