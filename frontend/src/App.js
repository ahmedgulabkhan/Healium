import React from 'react';
import './App.css';
import Header from "./components/header/header.component";
import HomePage from "./pages/home-page/home-page.component";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "./pages/not-found-page/not-found-page.component";
import AppointmentsPage from "./pages/appointments-page/appointments-page.component";
import StorePage from "./pages/store-page/store-page.component";
import LoginRegisterPage from "./pages/login-register-page/login-register-page.component";

const App = () => {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route path="/" exact={true} component={HomePage} />
                <Route path="/appointments" component={AppointmentsPage} />
                <Route path="/store" component={StorePage} />
                <Route path="/login" component={LoginRegisterPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    );
}

export default App;
