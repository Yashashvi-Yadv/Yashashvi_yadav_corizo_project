const User = require("../Models/User");

async function Add_data(req,res){
    let {Name,Class, Stream , Age} = req.body;
    Name = Name.toUpperCase()
  Class = Class.toUpperCase()
  
  Age = Age.toUpperCase()
  
  Stream = Stream.toUpperCase()
  
    await User.create({
        Name,
        Age, 
        Class, 
        Stream

    });
    res.redirect("/")

}
module.exports = Add_data;