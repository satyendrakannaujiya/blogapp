const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors  = require('cors');
// const logger = require('morgan');


const app = express();
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({extended:true,limit:'50mb'}));
app.use(cookieParser());
app.use(cors());

app.use((req, res, next)  => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Credentials", "true");
        res.header('Access-Control-Allow-Methods', 'GET', 'POST', 'DELETE', 'PUT');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
});
// app.use(logger('dev'));

mongoose.connect(config.get("dbDetails.url"),{ useNewUrlParser: true });

const auth = require('./routes/authRoutes');
const create = require('./routes/createRoutes');
const post = require('./routes/postRoutes');
const sendEmail = require('./routes/sendEmailRoutes');
const contact = require('./routes/contactRoutes');

app.use('/api/blogapp',auth);
app.use('/api/blogapp',create);
app.use('/api/blogapp',post);
app.use('/api/blogapp',sendEmail);
app.use('/api/blogapp',contact);

const port = process.env.PORT || 8080

app.listen(port,config.get("serverDetails.ip"),()=>{
        console.log("App is listening on "+config.get("serverDetails.ip")+":"+port);
});


