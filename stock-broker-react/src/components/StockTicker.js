import React from "react";
const finnhubToken = 'btui24748v6vqmm3rpo0';
// all the stock symbols can be found here: https://finnhub.io/api/v1/stock/symbol?exchange=US&token=

class StockTicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {apiResponse: []};
    }

    componentDidMount() {
        this.tick();
        this.timerID = setInterval(
            () => this.tick(),
            60000  //right now it ticks once every minute but I plan to set this to update every 5 minutes and just use websockets for anything that seems remotely live
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        fetch("https://finnhub.io/api/v1/quote?symbol=" + this.props.symbol + "&token=" + finnhubToken)
            .then(res => res.json())
            .then(data => {
                this.setState({apiResponse: data});
            })
            .catch(err => console.error(this.props.url, err.toString()))
    }

    render() {
        var leadingSymbol = "";
        var classTag = "";
        if (this.state.apiResponse.length === 0)
            return ("...loading");
        const {apiResponse} = this.state;
        if (this.props.name === "open") {
            return (this.state.apiResponse.o);
        }
        if (this.props.name === "high") {
            return (apiResponse.h);
        }
        if (this.props.name === "low") {
            return (apiResponse.l);
        }
        if (this.props.name === "current") {
            return (apiResponse.c);
        }
        if (this.props.name === "prevclose") {
            return (apiResponse.pc);
        }
        if (this.props.name === "change-since-last-close") {
            if(apiResponse.c > apiResponse.pc){
                leadingSymbol = "+";
                classTag = "PositiveData";
            } else{
                leadingSymbol = "";
                classTag = "NegativeData";
            }
            return <span className={classTag}> {leadingSymbol + (apiResponse.c - apiResponse.pc).toFixed(2)} </span>;
        }
        if (this.props.name === "%change-since-last-close") {
            if(apiResponse.c > apiResponse.pc){
                leadingSymbol = "+";
                classTag = "PositiveData";
            } else{
                leadingSymbol = "";
                classTag = "NegativeData";
            }
            return <span className={classTag}> {leadingSymbol + (((apiResponse.c - apiResponse.pc)/apiResponse.pc)*100).toFixed(2) + "%"} </span>;
        }
        if (this.props.name === "dailychange") {
            if(apiResponse.c > apiResponse.pc){
                leadingSymbol = "+";
                classTag = "PositiveData";
            } else{
                leadingSymbol = "";
                classTag = "NegativeData";
            }
            return <span className={classTag}> {leadingSymbol + (apiResponse.c - apiResponse.o).toFixed(2)}</span>;
        }
        if (this.props.name === "daily%change") {
            if(apiResponse.c > apiResponse.pc){
                leadingSymbol = "+";
                classTag = "PositiveData";
            } else{
                leadingSymbol = "";
                classTag = "NegativeData";
            }
            return <span className={classTag}> {leadingSymbol + (((apiResponse.c - apiResponse.o)/apiResponse.o)*100).toFixed(2) + "%"}</span>;
        }
        if (this.props.name === "time") {
            let unix_timestamp = apiResponse.t;
            var date = new Date(unix_timestamp * 1000);
            var hours = date.getHours();
            var minutes = "0" + date.getMinutes();
            var seconds = "0" + date.getSeconds();
            return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2) + " EST";
        }
    }
}

export default StockTicker;