import { atom } from "recoil";

export const recFirstNameAtom = atom({
    key: "receiverNameAtom",
    default: ""
})

export const recLastNameAtom = atom({
    key: "recLastNameAtom",
    default: ""
})

export const recIdAtom = atom({
    key: "recId",
    default: ""
})
