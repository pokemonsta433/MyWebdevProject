import React from 'react';
import './components/App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {apiResponse:""};
    }

     callAPI() {
        fetch("http://localhost:9000/")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res}));
    }

    componentWillMount(){
        this.callAPI();
    }

    //initializeStocks(){
    //    client.send(JSON.stringify)
   // }

    createMarkup() {
        return {__html: this.state.apiResponse}
    }

    render()
    {
        return (
            <div className="App">
                {/*<div dangerouslySetInnerHTML= {this.createMarkup()}></div>*/}
                {this.state.apiResponse}
            </div>
        );
    }
}


export default App;
