import { PokedataProps } from '../../types/PokedexProps';
import './PokeSearchResult.css';

type PokeSearchResultProps = {
    selectedPokemon: PokedataProps | undefined,
}

const TypeDef = ( type: string[] ) =>
{
    const types = []

    for(let i = 0; i < type.length; i++)
    {
        types.push (<p>Tipo: {type[i]}</p>)
    }

    return types;
}

function PokeSearchResult( { selectedPokemon }: PokeSearchResultProps )
{

    return (
        <div className='poke-result'>
            {
                selectedPokemon ? 
                (
                    <div id='result-open'>
                        <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + selectedPokemon.id + ".png"} />
                        <p>nome: {selectedPokemon.name.english}</p>
                        <p>id: {selectedPokemon.id}</p>      
                        {TypeDef(selectedPokemon.type)}
                    </div>
                )
                :
                (
                    <div id='result-closed'/>
                )
            }
        </div>
    )
}

export default PokeSearchResult;