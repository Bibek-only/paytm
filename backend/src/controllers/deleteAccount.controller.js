// this end point nedd authorization header and the  password for the current loged in user

import User from "../models/User.model.js";
import Account from "../models/Account.model.js";
export async function deleteUserAccount(req, res, next) {
  try {
    const password = req.body.password;
    if (password == null || password == "") {
      return res.status(400).json({
        status: 400,
        msg: "password is must need",
      });
    }
    // check the password that is entered is correct for the current logedin user or not
    const logedinUser = await User.findOne({_id: req.userId, password:password})
    if(!logedinUser){
       res.status(400).json({
            status: 400,
            msg: "the password is incorrect for the user"
        })
        return
    }


    const userAccount = await User.deleteOne({
      _id: req.userId,
      password: password,
    });
    const userWallet = await Account.deleteOne({ userId: req.userId });
    console.log();
    if (!userAccount || !userWallet) {
      res.status(400).json({
        status: 400,
        msg: "some error in the delete endpoint check the password",
      });
      return;
    }

    res.status(200).json({
      status: 200,
      msg: "user account deleted sucessfully",
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      msg: "some error in the delete endpoint",
    });
    return;
  }
}
