import express from 'express';
import cors from 'cors';
import router from './routes/routes.js';
import bodyParser from 'body-parser';
import dbConnection from './database/db.js';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));  // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json({extended: true}));
app.use('/', router)



const PORT =  process.env.PORT || 8000;

dbConnection();

// if u have to do something as soon as server starts
// react default port
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));