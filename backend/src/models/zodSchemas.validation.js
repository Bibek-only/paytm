import zod from "zod";
const signupSchema = zod.object(
    {
        userName: zod.string(),
        password: zod.string(),
        firstName: zod.string(),
        lastName: zod.string()
    }
)

export {signupSchema}