
import PokeRenderer from '../PokeRenderer/PokeRenderer';
import PokeSearchResult from '../PokeSearch/PokeSearchResult';
import SearchBox from '../SearchBox/SearchBox';
import './Pokedex.css';

const PokeList = () =>
{

    return (
        <div id='pokedex'>
            <div id="search-container">
                <SearchBox/>
                <div id="cards-container">
                    <PokeRenderer/>
                </div>
            </div>
            <div id='search-result-container'>
                <PokeSearchResult/>
            </div>
        </div>
    )
}

function Pokedex()
{

    return (
        <div >
            <PokeList/>
        </div>
    )
}

export default Pokedex;