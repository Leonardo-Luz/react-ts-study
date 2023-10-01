import './Guess.css';
import data from "../../data/Pokedata.json"

type GuessProps = {
    onInputChange: (inputValue: string) => void;
    clean?: string
}

type OptionsProps = {
    key: number,
    val: string
}

const SelectedOption = ( { key , val }: OptionsProps ) =>
{
    return (
        <option value={ key }>{ val }</option>
    )    
}

const Guess = ( { onInputChange , clean } : GuessProps ) =>
{
    let Options = [];

    const SelectableData = data;

    Options = SelectableData.map((pokemon) =>
    {
        return <SelectedOption  key={pokemon.id} val={pokemon.name.english} />
    })

    return(
        <input onChange={(e) =>{ onInputChange(e.target.value); }} type='Search' id='search' placeholder='pokemon...' value={clean}/>
    )
}

export default Guess;