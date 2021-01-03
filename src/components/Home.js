import React, { useState, useEffect } from 'react'
import MediaCard from './MediaCard'

const axios = require('axios');

function Home(props) {

    const [apod, setApod] = useState('')

    useEffect(() => {(async () => {
        const apod = await axios.get('https://api.nasa.gov/planetary/apod?api_key=HK2y7421Mj0L3cZKETQoomFPt5scdfMRQVegXLkj')
        setApod(apod.data)})()
      }, [])

    return (
        <div>
            <MediaCard image = {apod} parent = 'home'/>
        </div>
    );
}

export default Home;