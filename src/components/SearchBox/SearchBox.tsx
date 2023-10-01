import './SearchBox.css';

type SearchBoxProps = {
    onInputChange: (inputValue: string) => void;
}

function SearchBox({ onInputChange }: SearchBoxProps)
{
    return (
        <input onChange={(e) =>{
            onInputChange(e.target.value);
        }} id='search' type='search' placeholder='pokemon...'>
        </input>
    )
}

export default SearchBox;