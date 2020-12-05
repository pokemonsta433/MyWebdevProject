import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import './StockTicker'
import StockTicker from './StockTicker'
import UserStocks from "./UserStocks";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {apiResponse: ""};
    }
    render() {
        return (
            <Switch>
            <div className="App">
                <div>
                    <meta charSet="UTF-8"/>
                    <title>Simple Stonks - Home</title>
                    <div id="Market-Preview">
                        {/* to give the site some functionality I copied (and edited quite a bit) this module from the cnn markets page. I will use the finnhub API to get my own data and format it nicely in the final product */}
                        <div>
                            {/* BEGIN: Module Body */}
                            <div id="markets-overview-tickers">
                                <div className="disclaimer">Updated: <span><StockTicker symbol="NDAQ" name="time"/></span>
                                </div>
                                <ul className="three-equal-columns">
                                    {/* BEGIN: Dow Ticker */}
                                    <li className="column">
                                        <a className="ticker" href="https://money.cnn.com/data/markets/dow">
                                            <span className="ticker-name">Dow</span>
                                            <span className="ticker-name-change" data-ticker-name="Dow"><span id="DowChange"><StockTicker symbol="DJI"
                                                                                                name="%change-since-last-close"/></span></span>

                                            <div className="clearfix"/>
                                            <span className="ticker-points" id="DowPrice"><StockTicker symbol="DJI"
                                                                                                       name="current"/></span>
                                            &nbsp;/&nbsp;
                                            <span className="ticker-points-change"><span className="negData"><StockTicker
                                                symbol="DJI" name="change-since-last-close"/></span></span>
                                        </a>
                                    </li>
                                    {/* BEGIN: Nasdaq Ticker */}
                                    <li className="column">
                                        <a className="ticker" href="https://money.cnn.com/data/markets/nasdaq/">
                                            <span className="ticker-name">Nasdaq</span>
                                            <span className="ticker-name-change" data-ticker-name="Nasdaq"><StockTicker symbol="NDAQ" name="%change-since-last-close"/></span>
                                            <div className="clearfix"/>
                                            <span className="ticker-points"><StockTicker symbol="NDAQ" name="current"/></span>
                                            &nbsp;/&nbsp;
                                            <span className="ticker-points-change"><span
                                                className="posData"><StockTicker symbol="NDAQ" name="change-since-last-close"/></span></span>
                                        </a>
                                    </li>
                                    {/* BEGIN: Vanguard S&P ETF Ticker */}
                                    <li className="column">
                                        <a className="ticker" href="https://money.cnn.com/data/markets/sandp/">
                                            <span className="ticker-name">S&amp;P</span>
                                            <span className="ticker-name-change" data-ticker-name="S&P"><span
                                                className="posData"><StockTicker symbol="VOO" name="%change-since-last-close"/></span></span>
                                            <div className="clearfix"/>
                                            <span className="ticker-points">{<StockTicker symbol="VOO" name="current"/>}</span>
                                            &nbsp;/&nbsp;
                                            <span className="ticker-points-change"><span
                                                className="posData"><StockTicker symbol="VOO" name="change-since-last-close"/></span></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* END: Module Body */}
                        </div>
                        {/* end copied (and edited) code from cnn markets */}
                    </div>
                    <UserStocks/>
                    <div id="market-highlights">
                        <div className="two-equal-columns">
                            <div className="columnLeft" id="notable-stocks">
                                <div className="bordered">
                                    <div className="sorting-bar" id="market-highlight-sorting-bar">
                                        <ul className="Sorting-Tabs">
                                            <li><a href>Name</a></li>
                                            <li><a href>Open</a></li>
                                            <li><a href>Price</a></li>
                                            <li><a href>Mkt cap</a></li>
                                            <li><a href>Daily +/-</a></li>
                                        </ul>
                                    </div>
                                    <div id="highlights">
                                        <p>this will be a spot where you can see all the stonks and sort them with the
                                            bar above! How
                                            exciting :D</p>
                                    </div>
                                </div>
                            </div>
                            <div className="columnRight" id="Market-Stats">
                                <div className="bordered">
                                    <h2 style={{margin: 'auto', textAlign: 'center'}}><p
                                        className="module-header">Market Stats <i className="icon icon--arrow-right"/>
                                    </p></h2>
                                    <table id="key-stats" style={{width: '100%'}}>
                                        <tbody>
                                        <tr>
                                            <th>10-year yield</th>
                                            <td>
                  <span className="quote-dollar">
                    0.66
                  </span>
                                                <span className="post-currency-symbol">
                    %
                  </span>
                                            </td>
                                            <td>
                  <span className="changeData">
                    -1.04%
                  </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                Oil
                                            </th>
                                            <td>
                  <span className="pre-currency-symbol">
                    $
                  </span>
                                                <span className="quote-dollar">
                    39.55
                  </span>
                                            </td>
                                            <td>
                  <span className="changeData">
                    +0.61%
                  </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                Yen
                                            </th>
                                            <td>
                  <span className="pre-currency-symbol">
                    ¥
                  </span>
                                                <span className="quote-dollar">
                    104.98
                  </span>
                                            </td>
                                            <td>
                  <span className="changeData">
                    +0.28
                  </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                Euro
                                            </th>
                                            <td>
                  <span className="pre-currency-symbol">
                    $
                  </span>
                                                <span className="quote-dollar">
                    1.17
                  </span>
                                            </td>
                                            <td>
                  <span className="changeData">
                    -0.48
                  </span>
                                            </td>
                                        </tr>
                                        <tr className="row">
                                            <th>
                                                Gold
                                            </th>
                                            <td>
                  <span className="pre-currency-symbol">
                    $
                  </span>
                                                <span className="quote-dollar">
                    1,906.80
                  </span>
                                            </td>
                                            <td>
                  <span className="changeData">
                    -0.04%
                  </span>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Switch>
        );
    }
}


export default Home;
