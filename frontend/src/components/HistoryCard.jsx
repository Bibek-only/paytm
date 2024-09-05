import React from 'react'

const HistoryCard = ({prop}) => {
  return (
    <div className="mb-2 flex  flex-col rounded-x text-white bg-clip-border shadow-md bg-gray-800 p-2 rounded-xl">
              <h5 className="font-bold text-lg ">
                Time: <span>{prop.time}</span>
              </h5>
              <div className="infos text-sm flex gap-2">
                <p className="font-bold  text-inherit ">
                  <span className='text-red-400'>Sender: </span><span className="font-light">{prop.senderName}</span>
                </p>
                <p className="font-bold  text-inherit ">
                <span className='text-green-400'>Receiver: </span><span className="font-light">{prop.receiverName}</span>
                </p>
                <p className="font-bold  text-inherit ">
                  Amount: <span className="font-light">{prop.amount}</span>
                </p>
              </div>
            </div>
  )
}

export default HistoryCard
