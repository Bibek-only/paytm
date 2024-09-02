import { atom } from "recoil"
export const emailAtom = atom({
    default: "Unknow",
    key: "emailAtom"
})
export const firstNameAtom = atom({
    default: "Unknow",
    key: "firstNameAtom",

})
export const lastNameAtom = atom({
    default: "unknow",
    key: "lastNameAtom"
})
export const passwordAtom = atom({
    default: "",
    key: "passwordAtom"
})
export const balanceAtom = atom({
    default: 0,
    key: "balanceAtom"
})
