import PokeCard from "../PokeCard/PokeCard";

type RendererProps = {
    IdQty: number;
}


const Renderer = ( { IdQty } : RendererProps ) =>
{
    let Pokelist = [];

    for(let i = 0; i < IdQty; i++)
    {
        Pokelist.push(<PokeCard name="Picachu" id={i} />);
    }

    return Pokelist;
}

function PokeRenderer()
{
    return (
        <Renderer IdQty={11}/>
    )
}

export default PokeRenderer;