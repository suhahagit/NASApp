import React from 'react';
import Home from './Home'
import Search from './Search'
import Favorites from './Favorites'
import { Route } from 'react-router-dom'

function Container(props) {    
    return (
        <div>
            <Route path='/home' exact render={() => <Home />} />
            <Route path='/search' exact render={() => <Search />} />
            <Route path='/favorites' exact render={() => <Favorites />} />
            <Route path="/favorite/:id" exact render={({ match }) => <Favorites match={match}/>}/>
        </div>
    );
}

export default Container;