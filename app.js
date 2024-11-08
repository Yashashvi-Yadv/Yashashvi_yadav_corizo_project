const express = require('express');
const route = require('./Routes/route');
const app = express();
const path = require('path');

require('dotenv').config();
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use('/', route);

app.listen(process.env.PORT)