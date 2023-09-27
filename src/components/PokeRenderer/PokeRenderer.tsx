import PokeCard from "../PokeCard/PokeCard";
import Pokedata  from "../../data/pokedata";

type SpriteScheme = {
    normal?: string;
    animated?: string;
}

type PokeDataProps = {
    id?: string,
    species_id?: string,
    height?: string,
    weight?: string,
    base_experience?: string,
    order?: string,
    is_default?: string,
    name?: string,
    sprites?: string,
}

type PatchedPokeDataProps = {
    id?: string,
    species_id?: string,
    height?: string,
    weight?: string,
    base_experience?: string,
    order?: string,
    is_default?: string,
    name?: string,
    sprites?: PokeDataProps,
}


const Unpatch = (pokemons: PokeDataProps[] ) =>
{
    const Patched = pokemons.map((pokemon) =>
    {
        let ParsedSprite: SpriteScheme = {
            normal: undefined,
            animated: undefined
        };

        try
        {
            ParsedSprite = pokemon.sprites && JSON.parse(pokemon.sprites);
        } catch (e) {
            console.log("A");
        }

        const PatchedPokemon: PatchedPokeDataProps = {
            ...pokemon,
            sprites: ParsedSprite as PokeDataProps
        };

        return PatchedPokemon;
    });
}



const Renderer = ( ) =>
{
    let Pokelist = [];


    for(let i = 0; i < Pokedata.length; i++)
    {        
        Pokelist.push(<PokeCard src={} name={Pokedata[i].name} id={Pokedata[i].id} />);
    }

    return Pokelist;
}

function PokeRenderer()
{
    return (
        <Renderer/>
    )
}

export default PokeRenderer;