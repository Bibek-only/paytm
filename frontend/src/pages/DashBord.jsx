import React, { useEffect } from 'react'
import InputBox from '../components/InputBox'
import SendMoney from '../components/SendMoney'
import axios from 'axios'
import { userUrl, accUrl } from '../consant.js'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import {allUserAtom} from "../store/atom/allUserInDbAtom.jsx"
import { receiverIdAtom } from '../store/atom/paymentAtom.jsx'
import { ToastContainer, toast } from 'react-toastify';
import {
  firstNameAtom,
  lastNameAtom,
  emailAtom,
  balanceAtom,
  searchUserAtom
} from "../store/atom/userInfoAtom.jsx";
const DashBord = (timeOut) => {
  const [firstName, setFirstName] = useRecoilState(firstNameAtom);
  const [lastName, setLastName] = useRecoilState(lastNameAtom);
  const [email, setEmail] = useRecoilState(emailAtom);
  const [balance,setBalance] = useRecoilState(balanceAtom);
  const [allUser,setAllUser] = useRecoilState(allUserAtom);
  const [searchUser,setSearchUser] = useRecoilState(searchUserAtom);
  const setReceiverId = useSetRecoilState(receiverIdAtom)
  
  // function to delay 1 sec
  async function wait(time){
    return new Promise((res,rej)=>{
      setTimeout(() => {
        res("wait sucessfull")
      }, time);
    })
  }

  function clearOldData(){
    setFirstName(null);
    
  }

  const navigate = useNavigate()

  // logic to chech that the user is signed in to the applicatin on not or not
  useEffect(()=>{

    ;(async ()=>{

      if(! localStorage.getItem("token")){
        await wait(1500)
        navigate("/signup")
        return;
      }
      else{
         // ftetch the curently signed in user data and set it to the atoms
      const userinfoRes = await axios.get(`${userUrl}getuserinfo/`,{
        headers:{
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      // fetch the curently signed in user balance and wet it to the atoms
      const balanceRes = await axios.get(`${accUrl}getbalance/`,{
        headers:{
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })

      
     

      // set the atom values according to the logged in user
      setBalance(balanceRes.data.data.balance)
      setFirstName(userinfoRes.data.data.firstName)
      setLastName(userinfoRes.data.data.lastName)
      setEmail(userinfoRes.data.data.userName)
      }
     

    })();

    },[])

  //  find all the use that are currently present in the server and set it to allUserAtom
   async function getAllUserFun(){

    const allUserRes = await axios.get(`${userUrl}findall?filter=${searchUser}`)
    setAllUser(allUserRes.data.data);
    

   }
  
  // useEffect for find all user from data base
  useEffect(()=>{    
  const timeId = setTimeout(() => {
    getAllUserFun()
  },500);
  return () => clearTimeout(timeId)
    
  },[searchUser])

  // functio to show the toast
  function showToast(){
    toast.success('Loging out', {
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

  // function to handel logout
  function handelLogout(e){
    clearOldData()
    showToast()
    e.target.disable = true
    setTimeout(()=>{
      e.target.disable = false
      
        navigate("/signin")
    },1500)
    
  }

  return (
    <div className='db-parent w-screen h-screen bg-gray-400 flex justify-center items-center'>
      <div className="dashboard h-5/6 w-5/6 bg-white">

        {/* the navbar start */}
        <div className="navBar w-full flex justify-between my-12 items-center">
          <div className="logo ml-14 text-2xl font-bold">The wallet</div>
          <div className="userInfo flex items-center mr-14 gap-4 text-2xl font-bold">
            <h1>Hello, <span>{` ${email}`}</span></h1>
            
            <Button prop={{name: "Log out", class:"border px-4 py-1 rounded-full bg-gray-200 duration-[1000ms] hover:bg-gray-400 ", onClick:(e)=>{
              handelLogout(e)
            }}}></Button>
          </div>
        </div>

        {/* main part of dashbord */}
        <div className="mainPart flex flex-col ml-14 text-xl font-bold">
          <div className="balance mb-8">
            <h1>Your balance is: <span>{balance}</span></h1>
          </div>
          <div className="userSearch flex flex-col gap-4 mb-8">
          <h1>{`${firstName} ${lastName}`}</h1>
          <InputBox prop={{type:"text", class:"border w-full text-xl px-2 py-1 rounded-xl", placeholder:"Search user", onChange:(e)=>{setSearchUser(e.target.value)}  }}></InputBox>
          </div>

          {/* all the user list from the server */}
          <div className="allUsers overflow-y-scroll max-h-72">

            {/*  write the logic to send the send money cards */}
            {
              allUser.map((e)=>{
                return(
                  <SendMoney key={e.userName.split('@')[0]} prop={{userName:e.userName.split('@')[0] , index: allUser.indexOf(e)+1, onClick:()=>{
                    setReceiverId(e._id)
                    navigate("/payment")
                  } }}></SendMoney>
                )
              })
            }
            
          </div>
        </div>
      </div>
      {/* toast container */}
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

export default DashBord
