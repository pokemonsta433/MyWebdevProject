import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Explore from "./components/Explore";
import Home from "./components/HomePage"
import Login from "./components/Login";
import Portfolio from "./components/Portfolio";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import StockView from "./components/StockView";
import Logout from "./components/Logout";

function App(){
    return (
        <main>
            <Navbar/>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/Explore" component={Explore} exact/>
                <Route path="/Login" component={Login} exact/>
                <Route path="/Register" component={Register} exact/>
                <Route path="/Portfolio" component={Portfolio} exact/>
                <Route path="/StockView" component={StockView} exact/>
                <Route path="/Logout" component={Logout} exact/>
                <Route component={Error} />
            </Switch>
        </main>
    )
}

export default App;