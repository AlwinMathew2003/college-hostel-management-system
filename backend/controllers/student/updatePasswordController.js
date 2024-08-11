import login from "../../models/User.js"

export const updatePassword = async (req,res)=>{
    const user = await login.findOneAndUpdate({adm_no:req.body.adm_no},{password:req.body.newPassword})
    if (!user) {
        res.json({message:"Could not update password!"})
      }
  
      // If the user exists, log the user details
    console.log(user);
    console.log(req.body)
    res.json({message:"Succesfully updated"});
};