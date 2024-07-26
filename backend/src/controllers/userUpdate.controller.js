import {userInfoUpdateSchema} from "../models/zodSchemas.validation.js"
import User from "../models/User.model.js"
export async function userUpdate(req,res,next){
        const userInfo = req.body;

        const isValid = userInfoUpdateSchema.safeParse(userInfo);
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
                msg: "info updated successfully"
            })
        })
        .catch((err)=>{
            res.status(404).json({
                msg: "info not get updated some erro occur"
            })
            
        })

} 