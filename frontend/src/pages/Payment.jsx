import React from 'react'
import Button from '../components/Button'
import InputBox from '../components/InputBox'
const Payment = () => {
  return (
    <div className='paymentParent h-screen w-screen flex justify-center items-center bg-gray-400 ' >
        <div className="paymentCard h-2/4 w-1/4 bg-white flex flex-col items-center rounded-xl ">
            <h1 className="text-2xl font-bold my-12" >Send money</h1>
            <div className="receiverInfo w-full mb-12 flex flex-col gap-6">
              <div className="userName w-full flex items-center ml-14 text-xl font-bold gap-4">
                <div className="logo h-11 w-11 rounded-full border flex justify-center items-center bg-green-500">B</div>
                <p>Bibek</p>
              </div>
              <InputBox prop={{type:"text", class:"ml-14 border-2 w-5/6 text-xl px-2 py-1 rounded-xl outline-none", placeholder:"Enter amount", onChange:()=>{}}} ></InputBox>
            </div>
            <Button prop={{name: "Pay now", class:"bg-green-500  px-12 py-2 rounded-xl font-bold text-xl", onClick:()=>{}}}></Button>
        </div>
    </div>
  )
}

export default Payment
