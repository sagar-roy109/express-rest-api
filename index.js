const app = require('./app');
const envFile = require('dotenv');
envFile.config({path:'./config.env'});


app.listen(process.env.SERVER_PORT,()=>{
	console.log(`started is started at ${process.env.SERVER_PORT}`);
})
