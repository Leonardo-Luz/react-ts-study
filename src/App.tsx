import './App.css'
import './components/navbar/Navbar'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import PokedexAll from './pages/PokedexAll/PokedexAll';
import GuessMain from './pages/GuessMain/GuessMain';

const App = () => {    
    return (
      <Router>
        <div className="App">

            <Navbar/>
          
            <div className='margin'/>

            <Routes>
              <Route path='/' Component={PokedexAll} />
              <Route path='/:components/GuessMain' Component={GuessMain} />
            </Routes>
        </div>
      </Router>
    )      
}

export default App
