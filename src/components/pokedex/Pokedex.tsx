
import { PokedataProps } from '../../types/PokedexProps';
import PokeRenderer from '../PokeRenderer/PokeRenderer';
import PokeSearchResult from '../PokeSearch/PokeSearchResult';
import SearchBox from '../SearchBox/SearchBox';
import './Pokedex.css';

type PokedexProps = {
    searchedPokemon: PokedataProps[],
    selectedPokemon?: PokedataProps,
    onPokeCardClick: (pokemonName: string) => void,
    HandleInputChange: (inputValue: string) => void
}

const Pokedex = ( { searchedPokemon, selectedPokemon , onPokeCardClick , HandleInputChange }: PokedexProps ) =>
{
   
    return (
        <div id='pokedex'>
            
            <div id="search-container">
                
                <SearchBox onInputChange={HandleInputChange}/>
                
                <div id="cards-container">
                    
                    <PokeRenderer data={searchedPokemon} onPokeCardClick={onPokeCardClick}/> 
                
                </div>
            </div>
            
            <div id='search-result-container'>
                
                <PokeSearchResult selectedPokemon={selectedPokemon}/>
            
            </div>

        </div>
    )
}

export default Pokedex;