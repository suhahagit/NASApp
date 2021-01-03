import React from 'react';
import { useLocation } from 'react-router-dom';

const axios = require('axios');

function MediaCard(props) {

    const location = useLocation()
    const image = props.image

    console.log(location)

    const saveImg = async () => {
        await axios.post("http://localhost:4200/image",
            {
                title: image.data[0].title,
                imgUrl: image.links[0].href,
                description: image.data[0].description
            })
    }

    const deleteImg = async () => {
        await axios.delete(`http://localhost:4200/image/${image._id}`)

    }

    return (
        <div>
            {location.pathname === '/home' && <div>
                <p>Title: {image.title}</p>
                <img src={image.url} alt="" />
                <p>Description: {image.explanation}</p>
            </div>}

            {location.pathname === '/search' && <div>
                <p>Title: {image.data[0].title}</p>
                <img src={image.links[0].href} alt="" />
                <button onClick={saveImg}>LIKE</button>
            </div>}

            {location.pathname === '/favorites' && <div>
                <p>Title: {image.title}</p>
                <img src={image.imgUrl} alt="" />
                <button onClick={deleteImg}>UNLIKE</button>
            </div>}

            {location.pathname === `/favorite/${image._id}` &&<div>
                <p>Title: {image.title}</p>
                <img src={image.title} alt="" />
                <p>Description: {image.description}</p>
            </div>}

        </div>
    );
}

export default MediaCard;