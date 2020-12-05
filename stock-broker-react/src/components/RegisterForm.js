import React from 'react';
import './App.css';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {uname: '', pword: '', cnfrmpword: '', email: ''};

        this.handleUnameChange = this.handleUnameChange.bind(this);
        this.handlePwordChange = this.handlePwordChange.bind(this);
        this.handleCnfrmPwordChange = this.handleCnfrmPwordChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleUnameChange(event) {
        this.setState({uname: event.target.value});
    }

    handlePwordChange(event) {
        this.setState({pword: event.target.value});
    }

    handleCnfrmPwordChange(event) {
        this.setState({cnfrmpword: event.target.value});
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handleSubmit() {
        fetch('http://localhost:9000/sign_up/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                uname: this.state.uname,
                pword: this.state.pword,
                cnfrmpword: this.state.cnfrmpword,
                email: this.state.email
            })
        }).then(res => res.json())
            .then(data => {
                this.setState({apiResponse: data});
                if (this.state.apiResponse.success === 1) {
                    alert(this.state.apiResponse.errorMessage);
                } else {
                    alert(this.state.apiResponse.errorMessage);
                }
            })
            .catch(err => console.error(this.props.url, err.toString()))
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Username:</label><br/>
                <input type="text" value={this.state.uname} onChange={this.handleUnameChange}/><br/>
                <label>Email:</label><br/>
                <input type="text" value={this.state.email} onChange={this.handleEmailChange}/><br/>
                <label>Password:</label><br/>
                <input type="password" value={this.state.pword} onChange={this.handlePwordChange}/><br/>
                <label>Confirm Password:</label><br />
                <input type="password" value={this.state.cnfrmpword} onChange={this.handleCnfrmPwordChange}/><br/>
                <input type="submit" value="Register"/>
            </form>
        );
    }
}

export default RegisterForm;