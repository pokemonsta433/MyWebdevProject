import React from 'react';
import './App.css';
import {Link, Redirect} from "react-router-dom";
import Searchbar from "./Searchbar";
import SmartLogInOut from "./SmartLogInOut";

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {apiResponse: [], redirect: false};
        this.handleClick = this.handleClick.bind(this);
        this.renderRedirect = this.renderRedirect.bind(this)
    }

    componentDidMount() {
        this.getActiveUser();
        this.timerID = setInterval(
            () => this.getActiveUser(),
            1000  //right now it ticks once every second, eventually I want it to be a cache but right now I just gotta write my project
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
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

    handleClick(event) {
        event.preventDefault()
        this.setState({
            redirect: true
        })
        return false;
    }

    renderRedirect() {
        if (this.state.redirect) {
            this.setState({
                redirect: false
            })
            return <Redirect to="/"/>
        }
    }

    render() {
        return (
            <div>
                {this.renderRedirect()}
                <meta charSet="UTF-8" />
                <title>deletethis</title>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
                <div id="navbar">
                    <ul className="Nav-Links">
                        <li style={{float: 'left'}}><img alt="Simple Stonks" height={126} src="https://cdn.discordapp.com/attachments/587985560115740690/760227757207584818/SimpleStonksLogoVer2.png" width={300} onClick={this.handleClick}/></li>
                        <li><Link to="/" style={{fontSize: '30px'}}> Home </Link></li>
                        <li><Link to="/Explore" style={{fontSize: '30px'}}> Explore</Link></li>
                        {this.state.apiResponse.username !== "ERRUSERNOTLOGGEDIN" && <li><Link to="/Portfolio" style={{fontSize: '30px'}}>Your Portfolio</Link></li>}
                        {this.state.apiResponse.username === "ERRUSERNOTLOGGEDIN" && <li><Link to="/Login" style={{fontSize: '30px'}}> Login</Link></li>}
                        {this.state.apiResponse.username !== "ERRUSERNOTLOGGEDIN" && <li><Link to="/Logout" style={{fontSize: '30px'}}> Logout</Link></li>}
                        <li><Searchbar/></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navbar;