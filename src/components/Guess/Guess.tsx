import './Guess.css';

type GuessProps = {
    onInputChange: (inputValue: string) => void;
    clean?: string
}

const Guess = ( { onInputChange , clean } : GuessProps ) =>
{

    return(
        <input onChange={(e) =>{ onInputChange(e.target.value); }} type='Search' id='search' placeholder='pokemon...' value={clean}/>
    )
}

export default Guess;