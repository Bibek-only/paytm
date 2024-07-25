import zod from "zod";
const signupSchema = zod.object(
    {
        userName: zod.string(),
        password: zod.string(),
        firstName: zod.string(),
        lastName: zod.string()
    }
)

const signinSchema = zod.object({
    userName: zod.string(),
    password: zod.string()
})

export {signupSchema, signinSchema}