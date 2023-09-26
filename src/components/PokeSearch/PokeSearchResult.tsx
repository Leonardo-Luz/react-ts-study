import './PokeSearchResult.css';


function PokeSearchResult()
{
    const SelectedPoke = true;

    return (
        <div className='poke-result'>
            {
                SelectedPoke ? 
                (
                    <div id='result-open'>
                        {/* img */}
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