import React from 'react';
import './App.css';
import StockTicker from './StockTicker'
import HistoricalData from "./HistoricalData";
import {Link} from "react-router-dom";
import ActiveUser from "./ActiveUser";

class UserStocks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {apiResponse: []};
    }

    componentDidMount() {
        this.getUserList();
        this.timerID = setInterval(
            () => this.getUserList(),
            60000  //right now it ticks once every minute but I plan to set this to update every 5 minutes to reduce server stress.
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    getUserList() {
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
        ActiveUser.username = this.state.apiResponse;
    }


    render() {
        if (this.state.apiResponse.length === 0)
            return ("...loading");
        if (this.state.apiResponse.wasError === 1) {
            alert(this.state.apiResponse.errorMessage);
            return null;
        }
        var apiResponse = this.state.apiResponse;
        if (apiResponse.stocks === []) {
            return (
                <div className="bordered" id="portfolio-selection">
                    <div className="sorting-bar" id="portfolio-sorting-bar">
                        <ul className="Sorting-Tabs">
                            <li><a href>Name</a></li>
                            <li><a href>Price</a></li>
                            <li className="dailyChangeHeader"><a href>Daily +/-</a></li>
                            <li className="monthlyChangeHeader"><a href>Monthly</a></li>
                        </ul>
                    </div>
                    <p>This is where your stonks will show up when you add some to your portfolio! You'll be
                        able to sort them using the bar above :D</p>
                </div>);
        } else {
            const listItems = apiResponse.stocks.map((name) =>
                <Link to={{
                    pathname: '/StockView',
                    state:{stockName: {name}
                    }}}><li><span className="stockName">{name}</span> <span className="stockPrice"><StockTicker symbol={name}
                                                                                                        name="current"/></span>
                    <span className="stockDailyChange"><StockTicker symbol={name} name="dailychange"/></span> / <span
                        className="stockDailyPchange"><StockTicker symbol={name} name="daily%change"/></span>
                    <HistoricalData symbol={name} name="M"/></li></Link>)

            return (<div className="bordered" id="portfolio-sortable">
                <div className="sorting-bar" id="portfolio-sorting-bar">
                    <ul className="Sorting-Tabs">
                        <li><a href>Name</a></li>
                        <li><a href>Price</a></li>
                        <li className="dailyChangeHeader"><a href>Daily +/-</a></li>
                        <li className="monthlyChangeHeader"><a href>Monthly</a></li>
                    </ul>
                </div>
                <ul className="sortableStockList">{listItems}</ul>
            </div>);
        }
    }
}

export default UserStocks;