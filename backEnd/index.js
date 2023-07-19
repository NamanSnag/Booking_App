import express from 'express';
import dotenv from 'dotenv';
import db from './config/mongoose.js';
import routes from './routes/index.js';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import cors from 'cors';
const port = process.env.PORT || 8800;
const app = express();
dotenv.config();

//middleware
app.use(express.json());

app.use(cors());

app.use(cookieParser());

app.use(helmet());

app.use('/api', routes);

// production

// app.use(express.static(path.join(__dirname, "./client/build")));
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
// })

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