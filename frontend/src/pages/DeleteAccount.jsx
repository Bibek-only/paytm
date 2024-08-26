import React from 'react'

const DeleteAccount = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-1 gap-8 lg:gap-16">
          
          <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800 ">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Delete your account
          </h2>
          <div className="mt-8 space-y-6">
            <div className="flex items-cente gap-2">
              <label
                className=" text-sm font-medium text-gray-900 dark:text-white"
              >
                Email:
              </label>
              <p className="text-sm w-full text-white ">bibekbibek966@gmail.com</p>
            </div>
            <div className="flex items-cente gap-2">
              <label
                className=" text-sm font-medium text-gray-900 dark:text-white"
              >
                Name:
              </label>
              <p className="text-sm w-full text-white ">Bibek samal</p>
            </div>
            <div className="flex items-cente gap-2">
              <label
                className=" text-sm font-medium text-gray-900 dark:text-white"
              >
                Balance
              </label>
              <p className="text-sm w-full text-white">9000</p>
            </div>
            <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter your password</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password" required />
                    </div>
            
            <button
              type="submit"
              className="w-full px-5 py-3 text-base font-medium text-center text-red-500 bg-[#000000] rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto mr-2"
            >
              Delete your account
            </button>
            
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              
            <a  className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Go back
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            </div>
          </div>
        </div>
          
        
      </div>
      {/* toast container */}
    </section>
  )
}

export default DeleteAccount
