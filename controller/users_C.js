const {getAll} = require('../model/users_M');
async function getAllUsers(req,res) {
    try{
     console.log("hi");
     rows = await getAll();
     res.status().json({message:"ok"});
    }catch{
        res.status(500).json({message:"err"})
    }
}
module.exports={
    getAllUsers,
}