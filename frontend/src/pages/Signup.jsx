import React from 'react'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import { NavLink } from 'react-router-dom'

const Signup = () => {
  return (
    // main box that cover the body
    <div className="cardParent h-screen w-screen bg-gray-400 flex justify-center items-center text-black">
      {/* the card sart here */}
      <div className="card h-3/4 w-1/4 bg-white flex flex-col rounded-2xl">

        {/* the card part one */}
        <div className="heading flex flex-col gap-1 w-full  items-center my-6">
          <h1 class="text-2xl font-bold">
            Sign up
          </h1> 
          <p class="text-lg">Enter your information to create an account</p>
        </div>

        {/* the card part two */}
        <div className="inputFields flex flex-col gap-4 w-full">
          <div className="inputParent w-full ml-4 flex flex-col gap-1">
            <h3 class="text-xl font-bold">
              First name
            </h3>
            <InputBox prop={{type:"text", class:"border w-5/6 text-xl px-2 py-1 rounded-xl", placeholder:"Enter first name", onChange:(e)=>{console.log(e.target.value)}  }}></InputBox>
          </div>
          <div className="inputParent w-full ml-4 flex flex-col gap-1">
            <h3 class="text-xl font-bold">
              Last name
            </h3>
            <InputBox prop={{type:"text", class:"border w-5/6 text-xl px-2 py-1 rounded-xl", placeholder:"Enter last name", onChange:(e)=>{console.log(e.target.value)}  }}></InputBox>
          </div>
          <div className="inputParent w-full ml-4 flex flex-col gap-1">
            <h3 class="text-xl font-bold">
              Email
            </h3>
            <InputBox prop={{type:"text", class:"border w-5/6 text-xl px-2 py-1 rounded-xl", placeholder:"Enter email", onChange:(e)=>{console.log(e.target.value)}  }}></InputBox>
          </div>
          <div className="inputParent w-full ml-4 flex flex-col gap-1">
            <h3 class="text-xl font-bold">
              Password
            </h3>
            <InputBox prop={{type:"text", class:"border w-5/6 text-xl px-2 py-1 rounded-xl", placeholder:"Enter password", onChange:(e)=>{console.log(e.target.value)}  }}></InputBox>
          </div>
          
          
        </div>

        {/* the sign in button */}
        <div className="button flex flex-col gap-1 w-full items-center my-8">
          <Button prop={{name: "sign up", class:"border w-full text-2xl font-bold py-2", onClick:()=>{}}}></Button> 
          <p class="text-lg">Already have an account? <NavLink to="/signin">Login</NavLink></p>
        </div>
      </div>
    </div>
  )
}

export default Signup
