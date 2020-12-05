import React from 'react';
import './App.css';
import {Link} from "react-router-dom";
import LoginForm from "./LoginForm";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {apiResponse: [], email: "", password: ""};
    }

    render() {
        return (
            <div>
                <meta charSet="UTF-8" />
                <title>Simple Stonks - Login</title>
                <div id="card">
                    <h1>LOG IN</h1>
                   <LoginForm/>
                </div>
                <p style={{textAlign: 'center', marginTop: '50px'}}> new to Simple Stonks? Sign up </p>
                <p style={{textAlign: 'center', marginTop: '5px'}}><Link to="/Register"> HERE </Link>
                    <link />
                </p>
            </div>
        );
    }
}

export default Login;