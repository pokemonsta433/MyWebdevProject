import React from 'react';
import './App.css';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {uname: '', pword: '', apiResponse: []};

        this.handleUnameChange = this.handleUnameChange.bind(this);
        this.handlePwordChange = this.handlePwordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUnameChange(event) {
        this.setState({uname: event.target.value});
    }

    handlePwordChange(event) {
        this.setState({pword: event.target.value});
    }

    handleSubmit() {
        fetch('http://localhost:9000/log_in/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                uname: this.state.uname,
                pword: this.state.pword
            })
        }).then(res => res.json())
            .then(data => {
                this.setState({apiResponse: data});
                if (this.state.apiResponse.wasError === 1) {
                    alert(this.state.apiResponse.errorMessage);
                } else {
                    alert("Successfully logged in");
                }
            })
            .catch(err => console.error(this.props.url, err.toString()))
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Username:</label><br/>
                <input type="text" value={this.state.uname} onChange={this.handleUnameChange}/><br/>

                <label>Password:</label><br/>
                <input type="password" value={this.state.pword} onChange={this.handlePwordChange}/><br/>
                <input type="submit" value="Log In"/>
            </form>
        );
    }
}

export default LoginForm;