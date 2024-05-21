import React from 'react'
import { CiMail } from 'react-icons/ci'

const Newsletter = () => {
  return (
    <div className="bg-[#4158E8] w-[80%] mx-auto mt-28 py-12 px-6 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
      <div className="flex gap-4  text-white">

        <div>
          <h1 className="text-2xl font-bold">Subscribe to get the latest</h1>
          <h2 className="text-md">Properties and other news, stay updated.</h2>
        </div>
      </div>
      
      <div className="flex md:flex-row flex-col items-center bg-white md:rounded-full rounded-md p-2 shadow-md xs:w-[80%] lg:w-auto w-[120%] 2xl:w-[30%]">
        <CiMail size={30} className="text-gray-400" />
        <input 
          type="email" 
          placeholder="Enter your email address" 
          className="flex-1 p-2 border-none rounded-l-full outline-none"
        />
        <button className="bg-blue-500 text-white xs:px-4 xs:py-2 w-[80%] py-1 rounded-full hover:bg-blue-700 xs:w-auto">
          Subscribe
        </button>
      </div>
    </div>
  )
}

export default Newsletter
