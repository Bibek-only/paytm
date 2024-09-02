import Account from "../models/Account.model.js";
export async function findUserBalance(req,res,next){
    const userId = req.userId;
    const accInfo = await Account.findOne({userId: userId});
    // if the token info is not exist in the data base
    if(! accInfo){
        res.status(400).json({
            status: 404,
            msg: "the user of the token is not exist"
        })
        return;
    }

    res.status(200).json({
        status: 200,
        msg: "accoutn balace find sucessfully",
        data:{
            balance: accInfo.balance
        }
    })
}