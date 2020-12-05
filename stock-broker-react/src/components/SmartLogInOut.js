import React from 'react';
import './App.css';
import {Link} from "react-router-dom";

class SmartLogInOut extends React.Component {

    constructor(props) {
        super(props);
        this.state = {apiResponse: [], redirect: false};
        this.getActiveUser = this.getActiveUser.bind(this)
    }

    componentDidMount(){
        this.getActiveUser()
    }

    getActiveUser() {
        //this.setState({apiResponse: ActiveUser});
        fetch(
            'http://localhost:9000/active_user', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            }
        ).then(res => res.json())
            .then(data => {
                this.setState({apiResponse: data});
            })
            .catch(err => console.error(this.props.url, err.toString()))
    }

    render() {
        if (this.state.apiResponse.username === "ERRUSERNOTLOGGEDIN") {
            return (
                <Link to="/Login" style={{fontSize: '30px'}}> Login</Link>
            )
        } else {
            return (
                <Link to="/Login" style={{fontSize: '30px'}}> Logout</Link>)
        }
    }
}

export default SmartLogInOut;