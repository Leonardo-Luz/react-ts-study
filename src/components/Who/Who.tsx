import './Who.css';

const PokeImage = ( id: number ) =>
{
    return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png";
}

type RandPokeProps = {
    randNum: number
}

const RandPoke = ( { randNum }: RandPokeProps ) =>
{   

    return(
        <img src={PokeImage(randNum)} alt="Pokemon" className="shadow"/>
    )
}

type WhoProps = {
    rand: number
}

const Who = ( { rand } : WhoProps ) =>
{
    return(
        <div>
            <RandPoke randNum={rand} />
        </div>
    )
}

export default Who;