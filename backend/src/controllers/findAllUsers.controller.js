import User from "../models/User.model.js";

export async function findAllUsers(req,res,next){
    
    const filter = req.query.filter || "";
    
   
    
    // search user basis on first name and last name
    const users = await User.find({ // loop hole here we send all teh info fo ther users
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    

    res.status(200).json({
        status: 200,
        msg: "sucessfully get all user",
        data: users
    })

}