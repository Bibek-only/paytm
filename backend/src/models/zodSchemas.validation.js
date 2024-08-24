import zod from "zod";
const signupSchema = zod.object(
    {
        userName: zod.string().email(),
        password: zod.string(),
        firstName: zod.string(),
        lastName: zod.string()
    }
)

const signinSchema = zod.object({
    userName: zod.string().email(),
    password: zod.string()
})

const userInfoUpdateSchema = zod.object({
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()
})

export {signupSchema, signinSchema, userInfoUpdateSchema}