import { atom } from "recoil";
const amountAtom = atom({
    key: "amountAtom",
    default: 0
})

const receiverIdAtom = atom({
    key: "receiverIdAtom",
    default: ""
})

export {amountAtom,receiverIdAtom}