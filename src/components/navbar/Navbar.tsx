import './Navbar.css';

const Bar = () =>
{
    return (
        <div className="center">
            <div id="navbar">
                <a href="/"><img src="#"></img></a>
                <a href="/">Pokedex</a>
                <a href="/components/GuessMain">Adivinhe</a>
            </div>
        </div>
    )
};

function Navbar()
{
    return(
        <div>
            <Bar/>
        </div>
    )
}

export default Navbar;