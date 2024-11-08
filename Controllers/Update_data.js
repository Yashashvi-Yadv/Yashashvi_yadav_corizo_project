const User = require("../Models/User");

async function Update_data(req, res) {
  let { Name, Age, Class, Stream } = req.body; 
  Name = Name.toUpperCase()
  Class = Class.toUpperCase()
  
  Age = Age.toUpperCase()
  
  Stream = Stream.toUpperCase()
  


  try {
  
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id, 
      { Name, Age, Class, Stream }, 
    );

    if (!updatedUser) {
      return res.status(404).send('User not found');
    }

   
    res.redirect("/"); 
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating user');
  }
}

module.exports = Update_data;
