import express from 'express';
import dotenv from 'dotenv';
import db from './config/mongoose.js';
import routes from './routes/index.js';
import cookieParser from 'cookie-parser';
const port = process.env.PORT || 8800;
const app = express();
dotenv.config();

//middleware
app.use(express.json());

app.use(cookieParser())

app.use('/', routes);

app.use((err, req, res, next)=>{
    const errorStatus = err.status || 500;
    const message = err.message || 'Something went wrong';
    console.log(err);
    return res.status(errorStatus).json({
        succcess: false,
        status: errorStatus,
        message: message,
        stack: err.stack
    })
});

app.listen(port, (error) => {
    if(error) throw error;
    console.log("Listening on port", port);

})