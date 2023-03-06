const express     = require('express');
const cors = require('cors');
const sliderRouter=require("../router/sliderItem");
const userRoutes=require("../router/user");
const uploadController = require('../router/upload');
const bodyParser = require('body-parser')


const InitiateMongoServer = require('../db/mongoose');
InitiateMongoServer()
const app   = express();
const port  =  process.env.PORT || 3012;
app.use(bodyParser.json())
app.use(cors())
app.use(
    express.urlencoded({ extended: true })
);
app.use(express.json())
app.use(express.static('storage'));


app.get('/api',(req,res)=>{
    res.send("Welcome");
})

app.use("/api/sliders",sliderRouter);
app.use("/api/users",userRoutes);
app.use('/api/upload',uploadController);
app.listen(port,() =>{
    console.log('server is up on ' + port);
})