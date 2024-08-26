import React from 'react'

const HistoryCard = () => {
  return (
    <div className="mb-2 flex  flex-col rounded-x text-white bg-clip-border shadow-md bg-gray-800 p-2 rounded-xl">
              <h5 className="font-bold text-lg ">
                Time: <span>{`12/12/12, 03:23pm`}</span>
              </h5>
              <div className="infos text-sm flex gap-2">
                <p className="font-bold  text-inherit ">
                  Sender: <span className="font-light">{`Bibek`}</span>
                </p>
                <p className="font-bold  text-inherit ">
                  Receiver: <span className="font-light">{`gyana`}</span>
                </p>
                <p className="font-bold  text-inherit ">
                  Amount: <span className="font-light">{`200`}</span>
                </p>
              </div>
            </div>
  )
}

export default HistoryCard
