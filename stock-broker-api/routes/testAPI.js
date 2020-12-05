var express = require("express");
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});

var activeUser = {uname:"ERRUSERNOTLOGGEDIN", pword:"", email:"", stocks:[], ownedStocks: []}

var users = [{uname:"Isaac", pword:"password", email:"isaacwbg@gmail.com", stocks:["MSFT","AAPL","IBM"], ownedStocks: []}, {uname:"root", pword:"root", email:"root@gmail.com", stocks:[], ownedStocks: []}];


router.get("/active_user", function(req,res,next){
    console.log("got a get to /active_user")
    console.log(req.body)
    let response = {
        username: activeUser.uname,
        email: activeUser.email,
        stocks:activeUser.stocks,
        ownedStocks: activeUser.ownedStocks,
        wasError: 0,
    }
    res.setHeader('Content-Type', 'application/json');
    console.log(JSON.stringify(response));
    res.end(JSON.stringify(response))
})

router.post('/purchase', urlencodedParser, function (req, res) {
    console.log(req.body);
    let response = { //set response default
        wasError: 1,
        errorMessage: "you must be logged in and you must purchase at least one stock"
    }
    if(req.body.amount > 0){
        if(activeUser !== "ERRUSERNOTLOGGEDIN"){
            if(activeUser.ownedStocks[req.body.stockSymbol] === null){
                activeUser.ownedStocks[req.body.stockSymbol] = req.body.amount;
                response = { //set response default
                    wasError: 0,
                    errorMessage: "Stock Successfully purchased - first time!"
                }
            }else{
                activeUser.ownedStocks[req.body.stockSymbol] += req.body.amount;
                response = {
                    wasError: 0,
                    errorMessage: "Stock Successfully purchased - added to current stock"
                };
            }
        }
    }
    console.log(response);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
})


router.post('/log_out', urlencodedParser, function (req, res) {
    console.log(req.body);
    let response = { //set response default
        wasError: 1,
        errorMessage: "bro you didn't use the right code"
    }
    if(req.body.code === 'Logout'){
        activeUser = {uname:"ERRUSERNOTLOGGEDIN", pword:"", email:"", stocks:[]};
        response = {
            wasError: 0,
            errorMessage: "Successfully logged out"
        };
    }
    console.log(response);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
})

router.post('/watch', urlencodedParser, function (req, res) {
    console.log(req.body);
    let response = { //set response default
        wasError: 1,
        errorMessage: "looks like you aren't logged in"
    }
    if(activeUser !== "ERRUSERNOTLOGGEDIN"){
        if(activeUser.stocks.includes(req.body.stockSymbol)){
            response = { //set response default
                wasError: 1,
                errorMessage: "you are already watching that stock!"
            }
        }else{
            activeUser.stocks.push(req.body.stockSymbol);
            response = {
                wasError: 0,
                errorMessage: "Successfully added stock: " + req.body.stockSymbol
            };
        }
    }
    console.log(response);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
})

router.post('/unwatch', urlencodedParser, function (req, res) {
    console.log(req.body);
    let response = { //set response default
        wasError: 1,
        errorMessage: "looks like you aren't logged in"
    }
    if(activeUser !== "ERRUSERNOTLOGGEDIN"){
        if(activeUser.stocks.includes(req.body.stockSymbol)){
            index = activeUser.stocks.indexOf(req.body.stockSymbol);
            array.splice(index, 1); //since we already know it's included, we shouldn't need to check if the index is bigger than -1
            response = {
                wasError: 0,
                errorMessage: "successfully unwatched"
            }
        }else {
            response = {
                wasError: 1,
                errorMessage: "You aren't watching that stock"
            };
        }
    }
    console.log(response);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
})

router.post('/log_in', urlencodedParser, function (req, res) {
    console.log(req.body);
    let response = { //set response default
        wasError: 1,
        errorMessage: "Could not find your username in the database"
    }
    for(var i = 0; i < users.length; i++){
        let user = users[i];
        if(user.uname === req.body.uname){ //if we find their name then we change response
            if(user.pword === req.body.pword){
                response = {
                    username: user.uname,
                    email: user.email,
                    stocks: user.stocks,
                    wasError: 0
                };
                activeUser = user;
            }else{
                response = {
                    wasError: 1,
                    errorMessage: "incorrect password"
                }
            }
        }
    }
    console.log(response);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
})


router.post('/sign_up', urlencodedParser, function (req, res) {
    let response = {
        success: 1,
        errorMessage: "Registration successful"
    };
    if(req.body.pword !== req.body.cnfrmpword){
        response={
            success: 0,
            errorMessage: "Passwords do not match"
        }
    }
    for(var i = 0; i < users.length; i++){
        let user = users[i];
        if(user.uname === req.body.uname){ //if we find their name then we change response
                response = {
                    success: 0,
                    errorMessage: "That username is already registered in the database"
                };
                activeUser = user;
            }
        if(user.email === req.body.email){
                response = {
                    success: 0,
                    errorMessage: "that email is already registered in the database"
                }
            }
        }
    if(response.success === 1){
        users.push({uname: req.body.uname, pword: req.body.pword, email: req.body.email, stocks: []})
    }
    console.log(response);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
})


module.exports = router;