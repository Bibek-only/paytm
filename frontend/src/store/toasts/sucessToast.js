import {  toast } from 'react-toastify';
export function sucessToast(msg){

    toast.success(msg, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
        });
}
