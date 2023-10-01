import PokeCard from "../PokeCard/PokeCard";
import { PokedataProps } from "../../types/PokedexProps";

type PokeRendererProps = {
    data: PokedataProps[],
    onPokeCardClick: (pokemonName: string) => void
}

const PokeImage = ( id: number ) =>
{
    return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png";
}

const PokeRenderer = ( { data , onPokeCardClick }: PokeRendererProps ) =>
{
    return(
        data.map((pokemon) => {

            let typeSum = "";
            pokemon.type.map((type) =>{
                typeSum += type + " ";
            })

            return (
                pokemon.name.english && (
                    <PokeCard
                        id={pokemon.id}
                        name={pokemon.name.english}
                        src={PokeImage(pokemon.id)}
                        type={typeSum}
                        onPokeCardClick={onPokeCardClick}
                    />
                )
            )
        })
    )
}

export default PokeRenderer;