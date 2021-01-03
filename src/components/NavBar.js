import React from 'react';
import { Link } from 'react-router-dom'

function NavBar(props) {
    return (
        <div>
            <Link to="/home"> Home </Link>
            <Link to="/search"> Search </Link>
            <Link to="/favorites"> Favorites </Link>
        </div>
    );
}

export default NavBar;