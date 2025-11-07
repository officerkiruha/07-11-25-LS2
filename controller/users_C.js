async function getAllUsers(req,res) {
    console.log("hi");
    res.status().json({message:"ok"});

}


module.exports={
    getAllUsers,
}