const express = require("express");
const User = require("../Models/User");
async function Home(req,res){
   const user = await User.find();

   res.render("Home", {user:user});
};

module.exports = Home;