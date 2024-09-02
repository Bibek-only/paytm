// the use must send following props to the conponent
//<SendMoney prop={{userName:"bibek", index:1 ,onClick:()=>{} }}></SendMoney>
import React from 'react'
const SendMoney = ({prop}) => {
  return (
    <div className="pay-card flex items-center justify-between lg:justify-around  font-thin py-2">
              <h1 className="w-44  flex gap-2 items-start">
                <span className="font-bold">{prop.index}</span>
                <div className="inf">
                  <h1>{`${prop.firstName} ${prop.lastName}`}</h1>
                  <p className="text-sm font-thin">{`user: ${prop.userName}`}</p>
                </div>
              </h1>
              <button className=" px-8 rounded-full py-1 flex items-center  bg-blue-600  focus:ring-blue-800 hover:bg-blue-700" onClick={prop.onClick}>
                pay
              </button>
            </div>

    
  )
}

export default SendMoney
