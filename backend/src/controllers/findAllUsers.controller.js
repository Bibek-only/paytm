import User from "../models/User.model.js";

export async function findAllUsers(req,res,next){
    
    const filter = req.query.filter || "";
    
    // a little bit chane for search user basis on userName
    
    // // search user basis on first name and last name
    // const users = await User.find({
    //     $or: [{
    //         firstName: {
    //             "$regex": filter
    //         }
    //     }, {
    //         lastName: {
    //             "$regex": filter
    //         }
    //     }]
    // })

    // find user basis on user Name
    const users = await User.find({
            $or: [{
                userName: {
                    "$regex": `${filter}@gmail.com`
                }
            }]
        })

    res.status(200).json({
        status: 200,
        msg: "sucessfully get all user",
        data: users
    })

}