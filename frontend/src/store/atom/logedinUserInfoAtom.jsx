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
export const paymentHistoryAtom = atom({
    default: [{
        senderName: "unknown",
            senderEmail: "unknown",
            receiverName: "unknow",
            receiverEmail: "unkonw",
            amount: "0",
            time: "xx xx 00 0000 00:00:00"
    }],
    key: "paymentHistoryAtom"
})
