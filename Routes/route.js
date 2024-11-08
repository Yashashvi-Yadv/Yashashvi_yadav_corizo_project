const express = require('express');
const app = express();
const Home = require("../Controllers/Home");
const Add_data = require('../Controllers/Add_data');
const Delete_data = require('../Controllers/Delete_data');
const Update_data = require('../Controllers/Update_data');

app.get("/", Home);
app.post("/add_data", Add_data);
app.get("/update_data/:id", (req,res)=>{
    const id = req.params.id
    res.render("Update", {id})
} );
app.post('/update_data/:id',Update_data)
app.get("/delete_data/:id", Delete_data);


module.exports = app;