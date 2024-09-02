import React from 'react'
import HistoryCard from '../components/HistoryCard.jsx'
const AccountInfo = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div>
          <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Sign in to Flowbite
            </h2>
            <div className="mt-8 space-y-6">
              <div className="flex items-cente gap-2">
                <label className=" text-sm font-medium text-gray-900 dark:text-white">
                  Email:
                </label>
                <p className="text-sm w-full text-white ">
                  bibekbibek966@gmail.com
                </p>
              </div>
              <div className="flex items-cente gap-2">
                <label className=" text-sm font-medium text-gray-900 dark:text-white">
                  Name:
                </label>
                <p className="text-sm w-full text-white ">Bibek samal</p>
              </div>
              <div className="flex items-cente gap-2">
                <label className=" text-sm font-medium text-gray-900 dark:text-white">
                  Balance
                </label>
                <p className="text-sm w-full text-white">9000</p>
              </div>

              <button
                type="submit"
                className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-2"
              >
                Update account
              </button>
              <button
                type="submit"
                className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-2"
              >
                Delete account
              </button>
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                Go back to{" "}
                <a className="text-blue-600 hover:underline dark:text-blue-500">
                  home
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start gap-2">
          <h1 className="mb-4 text-lg font-extrabold tracking-tight leading-none text-gray-900 md:text-xl lg:text-2xl dark:text-white">
            Track Your Transactions, Secure Your Spending.
          </h1>
          {/* history card */}
          <div className="card-containder overflow-y-scroll pr-6 max-h-72 scrollbar">
            {/* card */}
            <HistoryCard></HistoryCard>
          </div>
        </div>
      </div>

      {/* toast container */}
    </section>
  )
}

export default AccountInfo
