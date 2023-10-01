import './PokeCard.css'

 
type PokeCardProps = {
    id: number,
    name: string,
    src: string,
    type: string,
    onPokeCardClick: (pokemonName: string) => void,
};

const PokeCard = ( { id , name , src , type, onPokeCardClick }: PokeCardProps) =>
{

    // onPokeCardClick("Bulbasaur");

    return (
        <button className='card' onClick={() => onPokeCardClick(name)}>
            <img src={src} alt={name + " image"} />
            <label className='card-space'>
                <h3>{name}</h3>
                <h3>#{id}</h3>
            </label>
            <br />
            <h3>{type}</h3>
        </button>
    )
}

export default PokeCard;