const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const paypal = require('paypal-rest-sdk');

const path = require('path');
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');
const captainRoutes=require("./routes/captain.routes")
const mapRoutes=require("./routes/maps.routes")
const rideRoutes=require("./routes/ride.routes")
const paymentRoutes=require('./routes/payment.routes')
const app = express();


paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': process.env.CLIENT_ID,
    'client_secret': process.env.SECRET
});
connectToDb();



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));



app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });


app.use('/users', userRoutes);
app.use('/captains',captainRoutes)
app.use('/maps',mapRoutes)
app.use('/rides',rideRoutes)
app.use('/paymentgateway',paymentRoutes)

module.exports=app