import React, { useState, useEffect } from 'react'
import MediaCard from './MediaCard'

const axios = require('axios');

function Search(props) {
    
    const [searchInput, setSearchInput] = useState('')
    const [images, setImages] = useState([])

    useEffect(() => {(async () => {
        const images = await axios.get(`https://images-api.nasa.gov/search?q=${searchInput}&media_type=image`)
        setImages(images.data.collection.items)})()
      }, [searchInput])

    return (
        <div>
            <input placeholder='Search Image/Video'
                type="text" value={searchInput} onChange={e => setSearchInput(e.target.value)} />
            {images.length && images.map((i, k) => <MediaCard key = {k} image = {i} parent = 'search'/>)}
        </div>
    );
}

export default Search;