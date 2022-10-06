const express =require('express');
const cookieParser=require('cookie-parser');
const errorMiddleware =require('../middleware/error');
const app=express();
const bodyParser =require('body-parser');
const fileupload = require('express-fileupload');
const path=require('path');
const cors = require('cors');
require('dotenv').config({path:'Backend/config/config.env'});



//middleware
app.use(cors());
app.use(bodyParser.urlencoded({extended:true,limit:"100kb"}));
app.use(fileupload());
app.use(express.json());
app.use(cookieParser());

//Router
const Generation = require('./Routers/Generation');
const user = require('./Routers/User');

app.use('/',Generation);
app.use('/',user);


//Error middleware
app.use(errorMiddleware);

module.exports=app;