import React from "react";
const finnhubToken = 'btui24748v6vqmm3rpo0';

class HistoricalData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {apiResponse: []};
    }

    componentDidMount() {
        this.getAPIResponse();
        this.timerID = setInterval(
            () => this.getAPIResponse(),
            2419200  //ticks once every 28 days
        );
    }

    getAPIResponse(){
        var perTime = 86400; //one day

        if(this.props.name === "M"){
            perTime = 2678500 //a bit over 31 days
        }
        if(this.props.name === "W"){
            perTime = 604900 // a bit over 7 days
        }

            fetch("https://finnhub.io/api/v1/stock/candle?symbol=" + this.props.symbol + "&resolution=" +
                this.props.name + "&from=" + Math.floor((new Date().getTime()/1000) - perTime) + "&to=" + Math.floor((new Date().getTime())/1000) + "&token=" + finnhubToken)
                .then(res => res.json())
                .then(data => {
                    this.setState({apiResponse: data});
                })
                .catch(err => console.error(this.props.url, err.toString()))
    }

    render() {
        var leadingSymbol = "";
        var classTag = ""
        if (this.state.apiResponse.length === 0)
            return ("...loading");
        if (this.state.apiResponse.o.length === 0){
            return("ERROR: the stock market cannot be reached right now")
        }
        if(this.state.apiResponse.c[0] - this.state.apiResponse.o[0]){
            leadingSymbol = "+";
            classTag = "PositiveData";
        } else{
            leadingSymbol = "";
            classTag = "NegativeData";
        }
        return ( <span className="HistoricalData">
            <span className={classTag}>{leadingSymbol + (this.state.apiResponse.c[0] - this.state.apiResponse.o[0]).toFixed()}</span> /
        <span className={classTag}>{leadingSymbol + ((this.state.apiResponse.c[0] - this.state.apiResponse.o[0])/this.state.apiResponse.o[0]).toFixed() + "%"}</span>
        </span>);
    }
}

export default HistoricalData;