// the use must send following props to the conponent
//<SendMoney prop={{name:"bibek", index:1 ,onClick:()=>{} }}></SendMoney>
import React from 'react'
const SendMoney = ({prop}) => {
  return (
    <div className="w-full flex justify-between mb-4">
      <div className="left flex items-center gap-4">
        <div className="index h-11 w-11 rounded-full border flex justify-center items-center">{prop.index}</div>
        <div className="name">{prop.name}</div>
      </div>

      <button className='mr-14 bg-black text-white px-4 py-2 rounded-xl' onClick={prop.onClick} >send money</button>
    </div>
  )
}

export default SendMoney
