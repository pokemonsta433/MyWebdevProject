import React from 'react';
import './App.css';
import RegisterForm from "./RegisterForm";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {apiResponse: ""};
    }
    render() {
        return (
            <div>
                <meta charSet="UTF-8" />
                <title>Simple Stonks - Register</title>
                <div id="register-card">
                    <h1>REGISTER</h1>
                    <RegisterForm/>
                </div>
            </div>
        );
    }
}

export default Register;