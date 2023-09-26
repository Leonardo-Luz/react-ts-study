
import './Pokedex.css';


type PokeCardProps = {
    id: number,
    name: string
};

const PokeCard = ( { id , name }: PokeCardProps) =>
{

    return (
        <div className='card'>
            <img src="" alt={name + " image"} />
            <label className='card-space'>
                <h3>{name}</h3>
                <h3>#{id}</h3>
            </label>
            <label>
                {/* types */}
            </label>
        </div>
    )
}

const PokeList = () =>
{

    return (
        <div id='pokedex'>
            <div id="cards-container">
                <p>POKEDEX LIST</p>

                <PokeCard id={2} name="Charizard"></PokeCard>
                <PokeCard id={2} name="Charizard"></PokeCard>
                <PokeCard id={2} name="Charizard"></PokeCard>
                <PokeCard id={2} name="Charizard"></PokeCard>
            </div>
            <div id='search-container'>

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