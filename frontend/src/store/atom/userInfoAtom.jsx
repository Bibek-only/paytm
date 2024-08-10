import { atom } from "recoil";

const firstNameAtom = atom({
    key: "firstNameatom",
    default: ""
})
const lastNameAtom = atom({
    key: "lastNameatom",
    default: ""
})
const emailAtom = atom({
    key: "emailatom",
    default: ""
})
const passwordAtom = atom({
    key: "passwordatom",
    default: ""
})
const balanceAtom = atom({
    key: "balanceAtom",
    default: 0
})
const searchUserAtom = atom({
    key: "searchUserAtom",
    default: ""
})

export {firstNameAtom, lastNameAtom, emailAtom, passwordAtom, balanceAtom , searchUserAtom}