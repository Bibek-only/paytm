import { atom } from "recoil";


const recevierInfoAtom = atom({
    key: "receiverInfoAtom",
    default: {
        firstName: "",
        lastName: ""
    }
})

export {recevierInfoAtom}