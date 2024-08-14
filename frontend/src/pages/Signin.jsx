import React from 'react'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import { NavLink } from 'react-router-dom'
import { emailAtom, passwordAtom } from '../store/atom/userInfoAtom'
import {  useRecoilState } from 'recoil'
import { userUrl } from '../consant'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

const Signin = () => {
  const navigate = useNavigate();
  const [email,setEmail] = useRecoilState(emailAtom);
  const [password,setPassword] = useRecoilState(passwordAtom);

  // function to show the tost
  function showToast(){
    toast.success('Signing in', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark"
      
      });
  }

  async function handelSignin(e){
    //function to show the toast
    showToast()

    e.target.disable = true
    setTimeout(async ()=>{
      
      const response = await axios.post(`${userUrl}signin/`,{
        userName: email,
        password: password
      })
      localStorage.setItem("token",response.data.data.token)
      e.target.disabled = false
      navigate("/dashbord")
    },1500)
  }

  return (
    // main box that cover the body
    <div className="cardParent h-screen w-screen bg-gray-400 flex justify-center items-center  text-black">
      {/* the card sart here */}
      <div className="card h-3/5 w-1/4 bg-white flex flex-col justify-center rounded-2xl">

        {/* the card part one */}
        <div className="heading flex flex-col gap-1 w-full  items-center my-6">
          <h1 class="text-2xl font-bold">
            Sign in
          </h1> 
          <p class="text-lg">Enter you information to access to your account</p>
        </div>

        {/* the card part two */}
        <div className="inputFields flex flex-col gap-4 w-full">
          <div className="inputParent w-full ml-4 flex flex-col gap-1">
            <h3 class="text-xl font-bold">
              Email
            </h3>
            <InputBox prop={{type:"text", class:"border w-5/6 text-xl px-2 py-1 rounded-xl", placeholder:"Enter email", onChange:(e)=>{ setEmail(e.target.value)}  }}></InputBox>
          </div>
          <div className="inputParent w-full ml-4 flex flex-col gap-1">
            <h3 class="text-xl font-bold">
              password
            </h3>
            <InputBox prop={{type:"text", class:"border w-5/6 text-xl px-2 py-1 rounded-xl", placeholder:"Enter password", onChange:(e)=>{setPassword(e.target.value)}  }}></InputBox>
          </div>
          
          
          
        </div>

        {/* the sign in button */}
        <div className="button flex flex-col gap-1 w-full items-center my-8">
          <Button prop={{name: "sign in", class:"border w-full text-2xl font-bold py-2", onClick:(e)=>{ handelSignin(e) }}}></Button> 
          <p class="text-lg">Dont have an account? <NavLink to="/signup">Sign up</NavLink></p>
        </div>
      </div>

      {/*  toast container */}
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"

/>
    </div>
  )
}

export default Signin
