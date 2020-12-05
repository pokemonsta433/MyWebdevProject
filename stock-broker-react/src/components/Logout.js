import React from 'react';
import './App.css';

class Logout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {apiResponse: []};
    }

    componentDidMount() {
        this.handleSubmit();
    }

    handleSubmit() {
        fetch('http://localhost:9000/log_out/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                code: 'Logout'
            })
        }).then(res => res.json())
            .then(data => {
                this.setState({apiResponse: data});
                if (this.state.apiResponse.wasError === 1) {
                    alert(this.state.apiResponse.errorMessage);
                } else {
                    alert("Successfully logged Out.");
                }
            })
            .catch(err => console.error(this.props.url, err.toString()))
    }

    render() {
        return (
            <div>
                <meta charSet="UTF-8" />
                <title>Simple Stonks - Login</title>
                <div id="card">
                    <h1>Logged Out</h1>
                </div>
            </div>
        );
    }
}

export default Logout;