import { atom } from "recoil";
import { receiverIdAtom } from "./paymentAtom";

const recevierInfoAtom = atom({
    key: "receiverInfoAtom",
    default: {
        firstName: "",
        lastName: ""
    }
})

export {recevierInfoAtom}