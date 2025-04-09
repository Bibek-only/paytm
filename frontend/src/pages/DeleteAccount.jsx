import React, { useEffect } from 'react'
import Button from '../components/Button.jsx';
import InputBox from '../components/InputBox.jsx';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userUrl } from '../consant.js';
import axios from 'axios';
import { useNavigate, NavLink } from 'react-router-dom';
import Tc from '../store/toasts/Tc.jsx';
import {
  emailAtom,
  firstNameAtom,
  lastNameAtom,
  balanceAtom,
  passwordAtom
} from "../store/atom/logedinUserInfoAtom.jsx";
import { sucessToast } from '../store/toasts/sucessToast.js';
import { errorToast } from '../store/toasts/errorToast.js';
const DeleteAccount = () => {
  const [password, setPassword] = useRecoilState(passwordAtom);
  const firstName = useRecoilValue(firstNameAtom);
  const lastName = useRecoilValue(lastNameAtom);
  const email = useRecoilValue(emailAtom);
  const balance = useRecoilValue(balanceAtom);

  const navigate = useNavigate();
  function delay(callback,e){
    setTimeout(()=>{
      e.target.disabled = false;
      callback();
    },1500)
    return;
  }

  async function handelDel(e){
    try {
      
      const delRes = await axios.delete(
        `${userUrl}deleteaccount/`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        data:{
          password: password,
          
        },
        }
      );

      console.log(delRes)
      if(delRes.data.status === 200){
        sucessToast("Account deleted");
        localStorage.removeItem('token')
        delay(()=>{
          navigate("/signup")
          return;
        },e)
      }
    } catch (error) {
      console.log(error)
      errorToast("Can't do the operation");
      return;
    }

  }
  useEffect(()=>{
    if(email === "" || email === null){
      navigate("/")
      return;
    }
    return ()=> {setPassword("")};
  },[])
  return (
    <section className="bg-gray-900 min-h-screen flex items-center justify-center">
      
          
          <div className="w-full max-md:h-screen lg:max-w-xl p-6 space-y-8 sm:p-8  rounded-lg shadow-xl bg-gray-800 ">
          <h2 className="text-2xl font-bold  text-white">
            Delete your account
          </h2>
          <div className="mt-8 space-y-6">
            <div className="flex items-cente gap-2">
              <label
                className=" text-sm font-medium  text-white"
              >
                Email:
              </label>
              <p className="text-sm w-full text-white ">{email}</p>
            </div>
            <div className="flex items-cente gap-2">
              <label
                className=" text-sm font-medium text-white"
              >
                Name:
              </label>
              <p className="text-sm w-full text-white ">{`${firstName} ${lastName}`}</p>
            </div>
            <div className="flex items-cente gap-2">
              <label
                className=" text-sm font-medium text-white"
              >
                Balance: 
              </label>
              <p className="text-sm w-full text-white">{balance}</p>
            </div>
            <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-white">Enter your password</label>
                        <InputBox prop={{
                          type: "text",
                          class: " border  text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500",
                          onChange: (e)=>{
                            setPassword(e.target.value);
                          }
                        }}>
                        </InputBox>
                    </div>
            
            <Button prop={{
              name: "Delete your account",
              class: "w-full px-5 py-3 text-base font-medium text-center text-red-500 bg-[#000000] rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto mr-2",
              onClick:(e)=>{
                handelDel(e);
              }
            }}>

            </Button>
            
            <div className="text-sm font-medium text-white">
              
            <NavLink to="/account" className="text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Go back
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </NavLink>
            </div>
          </div>
        </div>
        
      {/* toast container */}
      <Tc></Tc>
    </section>
  )
}

export default DeleteAccount
