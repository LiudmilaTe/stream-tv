import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import streamCreate from './streams/streamCreate';
import streamEdit from './streams/streamEdit';
import streamDelete from './streams/streamDelete';
import streamList from './streams/streamList';
import streamShow from './streams/streamShow';
import Header from './header';
import history from '../history';

const App = () => {
    return (
    <div className="ui container">


        <Router history={history}>

        <div>
            <Header />
            <Switch>
                <Route path="/" exact component={streamList} />
                <Route path="/streams/new" exact component={streamCreate} />
                <Route path="/streams/edit/:id" exact component={streamEdit} />
                <Route path="/streams/delete/:id" exact component={streamDelete} />
                <Route path="/streams/:id" exact component={streamShow} />
            </Switch>
        </div>
        </Router>
    </div>
    )
};


export default App;
