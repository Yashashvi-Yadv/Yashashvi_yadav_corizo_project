const User = require("../Models/User");

async function Delete_data(req,res){
  await User.findByIdAndDelete({_id:req.params.id});
  res.redirect("/")
}
module.exports= Delete_data;