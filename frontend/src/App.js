import React from 'react';
import './App.css';
import Header from "./components/header/header.component";
import HomePage from "./pages/home-page/home-page.component";

const App = () => {
    return (
        <div className="App">
            <Header />
            <HomePage />
        </div>
    );
}

export default App;
