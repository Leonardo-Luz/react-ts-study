
import './Pokedex.css';


type PokeCardProps = {
    id: number,
    name: string
};

const PokeCard = ( { id , name }: PokeCardProps) =>
{

    return (
        <div>
            <img src="" alt={name + " image"} />
            <label>
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
        <div id='pokedex-background'>
            <h2>POKEDEX</h2>
            <div id="cards-container">
                <PokeCard id={2} name="Charizard"></PokeCard>
                <PokeCard id={2} name="Charizard"></PokeCard>
                <PokeCard id={2} name="Charizard"></PokeCard>
                <PokeCard id={2} name="Charizard"></PokeCard>
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