import { signinSchema } from "../models/zodSchemas.validation.js";
import User from "../models/User.model.js";
export async function checkUserInDbForSignin(req, res, next) {
    const userInfo = req.body;
    
  // check if the user not provide some info
  if (
    userInfo.userName == null ||
    userInfo.userName == "" ||
    userInfo.password == null ||
    userInfo.password == ""
  ) {
    res.status(400).json({
      status: 400,
      msg: "all information must needed",
    });
    return;
  }

  // zod schema for input validation
  const isValid = signinSchema.safeParse(req.body);
  if (!isValid.success) {
    res.status(400).json({
      status: 400,
      msg: "the input may not valid",
    });
    return;
  }

  // logic to check the user already exist on the database or not

  if (!(await User.findOne(userInfo))) {
    res.status(400).json({
      status: 400,
      msg: "no user exist or you are using a wrong password try again",
    });
    return;
  }

  next();
}
