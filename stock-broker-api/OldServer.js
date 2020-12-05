var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});

//idk why semicolons are optional in javascript, but if you soee any that I forgot, just know they probably won't be in the final version

app.use(express.static('static'));
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/static/" + "Home_page.html");
})

app.post('/log_in', urlencodedParser, function (req, res) {
    response = {
        username: req.body.uname,
        password: req.body.pword,
    };
    console.log(response);
    res.end("it doesn't match our nonexistent database, so you weren't logged in, but here's the credentials you used \n" + JSON.stringify(response));
})


app.post('/sign_up', urlencodedParser, function (req, res) {
    response = {
        username: req.body.uname,
        email: req.body.email,
        password: req.body.pword,
        password2: req.body.cnfrmpword
    };
    console.log(response);
    res.end("we don't currently have a database to store your credentials in, but rest assured that they got here safely :D \n" + JSON.stringify(response));
})


// This responds with "Hello World" on the homepage
app.get('/search', function (req, res) {
    search = {
        stock: req.query.search_terms
    }
    console.log("Somebody tried to search for a stonk");
    console.log(search);
    res.sendFile(__dirname + "/static/" + "stock-viewer.html");
    res.end();
})

var server = app.listen(8081, function () {
    var address = server.address();
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s (or more likely http://127.0.0.1:8081)", host, port)
    console.log(address)
})

