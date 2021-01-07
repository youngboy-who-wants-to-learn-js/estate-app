import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'

import './App.css';
import { EstateList } from '../components/EstateList'
import { EstatePage } from "./EstatePage";

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                 <Route exact path="/" component={EstateList}/>
                 <Route exact path="/estate/:id" component={EstatePage} />
                 <Redirect to={'/'} />
                </Switch>
            </div>
        </BrowserRouter>
);
}

export default App;
