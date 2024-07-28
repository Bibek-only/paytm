import User from "../models/User.model.js";

export async function findAllUsers(req,res,next){

    const filter = req.query.filter || "";
    
    
    const users = await User.find({
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

    res.status(200).json(users)

}