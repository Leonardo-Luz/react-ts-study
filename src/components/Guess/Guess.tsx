import './Guess.css';

type GuessProps = {
    onInputChange: (inputValue: string) => void;
    onKeyDown: (e: string) => void;
    clean?: string
}

const Guess = ( { onInputChange, onKeyDown , clean } : GuessProps ) =>
{

    return(
        <input onKeyDown={(e) => { onKeyDown(e.key) } } onChange={(e) =>{ onInputChange(e.target.value); }} type='Search' id='search' placeholder='pokemon...' value={clean}/>
    )
}

export default Guess;