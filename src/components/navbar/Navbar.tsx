import React from "react";
import './Navbar.css';

const Bar = () =>
{
    return (
        <div className="center">
            <div id="navbar">
                <a href="#"><img src="#"></img></a>
                <a href="#">a</a>
                <a href="#">b</a>
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