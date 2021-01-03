import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import MediaCard from './MediaCard'

const axios = require('axios');

function Favorites(props) {
    
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        (async () => {
            let favorites
            if (props.match) {
                const id = props.match.params.id
                favorites = await axios.get(`http://localhost:4200/images?id=${id}`)
            } else {
                favorites = await axios.get("http://localhost:4200/images")
            }
            setFavorites(favorites.data)
        })()
    }, [props.match])

    return (
        <div>
            {favorites.length && favorites.map((f, i) => <Link to={`/favorite/${f._id}`} key={i}><MediaCard key={i} image={f} parent='favorites' /></Link>)}
        </div>
    );
}

export default Favorites;