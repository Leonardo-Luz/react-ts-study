import React from 'react';
import './App.css'
import './components/navbar/Navbar'
import Navbar from './components/navbar/Navbar';

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

type LockedProps =
{
  placeholder?: string,
  type: string
}

const Locked = ( { placeholder = "" , type }: LockedProps ) =>
{
  const locker = <input placeholder = { placeholder } type={ type }></input>;

  return(
    locker
  )
};

function App() {

  let randNum = Math.random() * 4 + 1;

  return (
    <div className="App">

      <Navbar/>

      <main>
        <Title size = { randNum }>
          Hello World
        </Title>

        <Locked type='text' placeholder='texto...'/>
      </main>


    </div>
  )
}

export default App
