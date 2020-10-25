import React from 'react';
import './App.css';
import Header from "./components/header/header.component";
import HomePage from "./pages/home-page/home-page.component";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "./pages/not-found-page/not-found-page.component";

const App = () => {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route path="/" exact={true} component={HomePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    );
}

export default App;
