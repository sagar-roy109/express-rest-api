const express =  require("express");
const app = new express();
const router =  require("./src/routes/api");

//Securrity middle ware import

const cors =  require('cors');
const expressMongoSantize = require('express-mongo-sanitize');
const helmet = require('helmet');
const hpp = require('hpp');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)

})


/** SECURITY MIDDLEWARE  */

app.use(cors());
app.use(expressMongoSantize());
app.use(helmet());
app.use(hpp());
app.use(xss());
app.use(limiter);



app.use("/api/v1/", router);

/** DEFINE UNDEFINE ROUTES */

app.use('*', (req, res)=>{
	res.status(404).json({status: "error", data:"Page Not Found"});
})

module.exports = app;
