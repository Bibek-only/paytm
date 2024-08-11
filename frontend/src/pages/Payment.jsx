import React, { useEffect } from 'react'
import axios from 'axios'
import { userUrl, accUrl } from '../consant'
import Button from '../components/Button'
import InputBox from '../components/InputBox'
import { amountAtom } from '../store/atom/paymentAtom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { receiverIdAtom } from '../store/atom/paymentAtom'
import {  useNavigate } from 'react-router-dom'
import {recevierInfoAtom} from "../store/atom/receiverInfoAtom"
const Payment = () => {
  const [receiverInfo,setReceiverInfo] = useRecoilState(recevierInfoAtom)
  const navigate = useNavigate();

  const [amount, setAmount] = useRecoilState(amountAtom);
  const receiverId = useRecoilValue(receiverIdAtom)
  async function handelPayment(){
  const paymentRes = await axios.put(`${accUrl}transfermoney`,{
      userId: receiverId,
      amount: Number.parseInt(amount)
  },{
      headers:{
        Authorization:`Bearer ${localStorage.getItem("token")}`
      }
    })

    if(paymentRes.status == 200){
      setReceiverInfo({
        firstName: "",
        lastName: ""
      })
      navigate("/dashbord")
    }

  }

  async function getReceiverInfoFun(){
    const receiverInfoRes = await axios.post(`${userUrl}getreceiverinfo`,{
       receiverId: "66b6e3e62ef62c182630eea6"
    })

    if(receiverInfoRes.status == 200){
      setReceiverInfo({
        firstName: receiverInfoRes.data.data.firstName,
        lastName: receiverInfoRes.data.data.lastName
      })
    }
    
  }


  useEffect(()=>{
   
    if(receiverId == "" || receiverId == null){
      navigate("/dashbord")
    }
    else{
      getReceiverInfoFun()
    }
  },[])

  
  return (
    <div className='paymentParent h-screen w-screen flex justify-center items-center bg-gray-400 ' >
        <div className="paymentCard h-2/4 w-1/4 bg-white flex flex-col items-center rounded-xl ">
            <h1 className="text-2xl font-bold my-12" >Send money</h1>
            <div className="receiverInfo w-full mb-12 flex flex-col gap-6">
              <div className="userName w-full flex items-center ml-14 text-xl font-bold gap-4">
                <div className="logo h-11 w-11 rounded-full border flex justify-center items-center bg-green-500">{receiverInfo.firstName[0]}</div>
                <p>{`${receiverInfo.firstName} ${receiverInfo.lastName}`}</p>
              </div>
              <InputBox prop={{type:"text", class:"ml-14 border-2 w-5/6 text-xl px-2 py-1 rounded-xl outline-none", placeholder:"Enter amount", onChange:(e)=>{ setAmount(e.target.value) }}} ></InputBox>
            </div>
            <Button prop={{name: "Pay now", class:"bg-green-500  px-12 py-2 rounded-xl font-bold text-xl", onClick:()=>{ 
              // check the user id and 
              if( receiverId == "" || receiverId == null || amount == "" || amount == null){
                navigate("/dashbord")
              }
              else{
                handelPayment()
              }
              
             }}}></Button>
        </div>
    </div>
  )
}

export default Payment
