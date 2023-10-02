import React from 'react';
import './GuessMain.css'

import data from "../../data/Pokedata.json"
import { PokedataProps } from '../../types/PokedexProps';

import Guess from '../../components/Guess/Guess';
import Who from '../../components/Who/Who';

let randomNum = Math.floor(Math.random() * data.length + 1);

let count = 0;

const newRand = () =>
{
    randomNum = Math.floor((Math.random() * data.length) + 1);
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
    query: string,
    typesFound?: string[],
    enter: number
}

class GuessMain extends React.Component<any, GuessState > 
{

    state = {
        Pokedata: data,
        searchedPokemon: data,
        selectedQuery: undefined,
        query: "",
        typesfound: [""],
        enter: 0
    };

    
    HandleKeyDown = (keycode: string) =>
    {
      const { searchedPokemon } = this.state;

      let onList = document.getElementById(searchedPokemon[this.state.enter].id.toString());
      onList?.removeAttribute("Class");


      if(keycode == "ArrowDown" && (this.state.enter  < searchedPokemon.length - 1 ))
      {
        this.state.enter++;
      }
      else if(keycode == "ArrowUp" && (this.state.enter  > 0))
      {
        this.state.enter--;
      }
      else if(keycode == "Enter")
      {
        this.HandleClick(searchedPokemon[this.state.enter].id);
        this.state.enter = 0;
      }

        onList = document.getElementById(searchedPokemon[this.state.enter].id.toString());
        onList?.setAttribute("Class", "select");
        onList?.scrollIntoView({
          block: "nearest", inline: "start",
          behavior: "smooth"
        })
    }

    HandleInputChange = (inputValue: string) =>
    {
      const  { Pokedata , typesfound } = this.state;
      
      this.state.enter = 0;
      let newTypesFound = typesfound;
      
      if(typesfound.length > 1)
      {
        newTypesFound = typesfound.filter( (element) => {
          return (element != "")
        })
      }
      
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

        if(newTypesFound[0] != "")
        {          
          searchedPokemon = searchedPokemon.filter(
            ( pokemon ) => {
                return (
                  (pokemon.type[0] == newTypesFound[0] ||
                  pokemon.type[0] == newTypesFound[1]) ||
                  (pokemon.type[1] == newTypesFound[0] ||
                  pokemon.type[1] == newTypesFound[1]) ||
                  pokemon != undefined &&
                  !(
                    (pokemon.type[0] != newTypesFound[0] &&
                      pokemon.type[0] != newTypesFound[1]) ||
                      (pokemon.type[1] != newTypesFound[0] &&
                      pokemon.type[1] != newTypesFound[1]))
                )
            }
          )
        }


        this.setState({
          Pokedata: data,
          searchedPokemon: searchedPokemon,
          query: inputValue
        });
    }

    HandleClick = ( PokeId: number ) =>
    {
        const { typesfound } = this.state;

        this.state.enter = 0;

        console.log(PokeId);
        

        if(PokeId == randomNum)
        {
            count++;
            newRand();

            let inputClean = document.getElementById("search") as HTMLInputElement;
            inputClean.value = "";
    
            this.state.typesfound = [""];

            this.setState({
                query: "",
                typesFound: [""]
            });    
          }
        else
        {
            const guess = data.filter( (pokemon) => {
              return (
                pokemon.id == PokeId
              )
            })

            const asnwer = data.filter( (pokemon) => {
              return (
                pokemon.id == randomNum
              )
            })

            let temp = false;

            for (let i = 0; i < asnwer[0].type.length; i++) 
            for (let j = 0; j < guess[0].type.length; j++)
            {
              if(asnwer[0].type[i] == guess[0].type[j])
              {
                typesfound.forEach(element => {
                  if(element == guess[0].type[j])
                  {
                    temp = true;
                  }
                });
                if(!temp)
                {
                  this.state.typesfound.push(guess[0].type[j]);
                }
              }
            }
        }
        

        let inputClean = document.getElementById("search") as HTMLInputElement;
        inputClean.value = "";

        this.setState({
            query: "",
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

    typesRender = ( data: string[] ) =>
    {
        let list_ = [] as React.ReactNode[];
    
        data.forEach(element => {
            list_.push(<label>{element + " "}</label>)
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
    
                <Guess onInputChange={ this.HandleInputChange } onKeyDown={ this.HandleKeyDown }/>

                {this.state.query != "" && this.state.searchedPokemon.length > 0 && (
                    <label id='drop-down'>
                        { this.ListRender(this.state.searchedPokemon) }
                    </label>
                )}

                <Who rand={randomNum}/>
                
                <br />
                {this.state.typesfound.length > 0 && (
                  <label>
                    { this.typesRender(this.state.typesfound) }
                  </label>
                )}
                
                <br/>

                <p>Count: {count}</p>
            </main>
        )      
    }
}

export default GuessMain
