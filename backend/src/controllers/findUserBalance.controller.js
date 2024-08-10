import Account from "../models/Account.model.js";
export async function findUserBalance(req,res,next){
    const userId = req.userId;
    const accInfo = await Account.findOne({userId: userId});
    res.status(200).json({
        status: 200,
        msg: "accoutn balace find sucessfully",
        data:{
            balance: accInfo.balance
        }
    })
}