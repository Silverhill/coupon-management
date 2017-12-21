import express from 'express';
//import open from 'open';
import mongoose from 'mongoose';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import bodyParser from 'body-parser';
import home from './routes/home';
import user from './routes/user';

/* eslint-disable no-console */

const port = 3000;
const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017/coupon-db';
const app = express();
const compiler = webpack(config);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let v1 = express.Router()

mongoose.Promise = global.Promise;

mongoose.connect(mongoURL, { useMongoClient: true }, (error) => {
    if (error) {
        console.error('Please make sure Mongodb is installed and running!');
        throw error;
    }
});

mongoose.connection.once('open', function() {
    console.log('Mongodb connection success!!');
});

if (process.env.NODE_ENV !== 'test') {
    app.use(require('webpack-dev-middleware')(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath
    }));
    app.use(require("webpack-hot-middleware")(compiler));
}

// Api routes

//Users
v1.use('/', home);
v1.use('/users', user);

//Auth
v1.use('/auth', require('./auth').default);
//v1.use('/api/users', require('./user'));

// Api version
app.use('/v1', v1);
// Default API Version
app.use('/', v1);

// catch 404 and forward to error handler
app.use((req, res) => {
    res.status(404).json({
        message: 'Route not found'
    })
})

app.listen(port, function (error) {
    if(error) {
        console.log(error);
    } else {
        console.log(`Express App running on port ${port}`);
        if (process.env.NODE_ENV !== 'test') {
            //open(`http://localhost:${port}`)
        }
    }
});

export default app;
