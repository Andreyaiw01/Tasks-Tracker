const express = require("express");
const bodyParser = require("body-parser");
routes = require('./routes/index');
const app = express();

const host = '127.0.0.1';
const port = 3000;

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

// set port, listen for requests
app.listen(port, host, () => console.log(`Server listens http://${host}:${port}`));