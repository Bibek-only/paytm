import React from 'react'
import InputBox from '../components/InputBox'
import SendMoney from '../components/SendMoney'

const DashBord = () => {
  return (
    <div className='db-parent w-screen h-screen bg-gray-400 flex justify-center items-center'>
      <div className="dashboard h-5/6 w-5/6 bg-white">

        {/* the navbar start */}
        <div className="navBar w-full flex justify-between my-12 items-center">
          <div className="logo ml-14 text-2xl font-bold">The wallet</div>
          <div className="userInfo flex items-center mr-14 gap-4 text-2xl font-bold">
            <h1>Hello, user</h1>
            <div className="avatar flex items-center justify-center h-12 w-12 rounded-full border">B</div>
          </div>
        </div>

        {/* main part of dashbord */}
        <div className="mainPart flex flex-col ml-14 text-xl font-bold">
          <div className="balance mb-8">
            <h1>Your balance is: <span>$500</span></h1>
          </div>
          <div className="userSearch flex flex-col gap-4 mb-8">
          <h1>Bibek samal</h1>
          <InputBox prop={{type:"text", class:"border w-full text-xl px-2 py-1 rounded-xl", placeholder:"Search user", onChange:(e)=>{console.log(e.target.value)}  }}></InputBox>
          </div>

          {/* all the user list from the server */}
          <div className="allUsers overflow-y-scroll max-h-72">
            <SendMoney prop={{name: "Bibek", index: 1, onClick:()=>{} }}></SendMoney>
            <SendMoney prop={{name: "Gyana", index: 2, onClick:()=>{} }}></SendMoney>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashBord
