import {userInfoUpdateSchema} from "../models/zodSchemas.validation.js"
import User from "../models/User.model.js"
export async function userUpdate(req,res,next){
        
        //The user must send the jwt token in the headers authurization section for authMiddleware verification and in the body the user must send the password and the first name and the last name for updation process
        const userInfo = req.body;

        const isValid = userInfoUpdateSchema.safeParse(userInfo);
        if(userInfo.firstName == "" || userInfo.firstName == null || userInfo.password =="" || userInfo.password == null){
            res.status(404).json({
                status: 404,
                msg: "info not get updated some erro occur"
            })
            return
        }
        if(! isValid.success){
            res.status(404).json({
                msg: "in valid inputs"
            })
            return;
        }

        await User.updateOne({
           _id: req.userId
        },userInfo)
        .then(()=>{
            res.status(200).json({
                status: 200,
                msg: "info updated successfully"
            })
        })
        .catch((err)=>{
            res.status(404).json({
                status: 404,
                msg: "info not get updated some erro occur"
            })
            
        })

} 