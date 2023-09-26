import './PokeCard.css'

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
        </div>
    )
}

export default PokeCard;