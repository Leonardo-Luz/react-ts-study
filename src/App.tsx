import React from 'react';
import './App.css'
import './components/navbar/Navbar'
import Navbar from './components/navbar/Navbar';
import Pokedex from './components/pokedex/Pokedex';

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


function App() {

  let randNum = Math.random() * 4 + 1;

  return (
    <div className="App">

      <header>
        <Navbar/>
      </header>

      <div className='margin'/>

      <main>
        <Title size = { randNum }>
          POKEDEX
        </Title>

        <Pokedex/>
      </main>


    </div>
  )
}

export default App
