import './PokeSearchResult.css';


function PokeSearchResult()
{
    const SelectedPoke = false;

    return (
        <div className='poke-result'>
            {
                SelectedPoke ? 
                (
                    <div id='result-open'>
                        {/* img */}
                        {/* pokedex width 60% */}
                        <p>nome</p>
                        <p>id</p>
                        <p>peso</p>
                        <p>nivel</p>
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