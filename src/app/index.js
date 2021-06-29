import React from 'react'
import { HashRouter, Route } from 'react-router-dom'

import { NavBar } from '../components'
import { MoviesList, MoviesInsert } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <HashRouter basename="/">
            <NavBar />
            <Route path="/list" exact component={MoviesList} />
            <Route path="/" exact component={MoviesInsert} />
        </HashRouter>
    )
}

export default App