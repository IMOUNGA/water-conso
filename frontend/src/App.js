import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
//import NotFound from './pages/NotFound';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
