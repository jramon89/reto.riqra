const express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    app = express(),
    graphqlHTTP = require('express-graphql'),
    schema = require('./schema'),
    config = require('./config');

function settings() {

    app.set('views', process.cwd() + '/server/views');
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.use(function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Credentials', 'true');
        res.header('Access-Control-Allow-Methods', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, Accept, user, X-Requested-With, Content-Type');
        next();
    });

    app.use(cors());
    app.use('/api', graphqlHTTP({
        schema,
        graphiql: true
    }));
/*
    Object.keys(config.routes).forEach(function(val) {
        app.use('/api', config.routes[val]);
    });
*/

    app.listen(config.port, function() {
        console.log('Server running on:', config.port);
        // open(`http://${config.host}:${config.port}`);
    });
}

module.exports = settings;
