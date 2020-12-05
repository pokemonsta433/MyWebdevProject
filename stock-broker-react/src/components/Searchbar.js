import React from 'react';
import './App.css';
import {Link, Redirect} from "react-router-dom";

class Searchbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {searchString: "", redirect: false};
        this.handleSearchStringChange = this.handleSearchStringChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderRedirect = this.renderRedirect.bind(this)
    }

    handleSearchStringChange(event) {
        this.setState({searchString: event.target.value});
    }

    handleSubmit(event) {
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
            return <Redirect
                to={{
                pathname: '/StockView',
                state: {stockName: {name: this.state.searchString}}
                }}
            />
        }
    }

    render() {
        return (
            <div id="nav-search">
                {this.renderRedirect()}
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input name="search_terms" placeholder="Search..." type="text" value={this.state.searchString} onChange={this.handleSearchStringChange}/>
                    </label>
                    <button type="submit"><i className="fa fa-search" id="search-button"/></button>
                </form>
            </div>
        );
    }
}
export default Searchbar;