import React from 'react'
const Impact = () => {
  return (
      <>
      <div name="impactMain" className='xl:mt-64 lg:mt-96 sm:mt-[90em] mt-52'>
        
           {/* Container one holding head, para, and button  */}
        <div className="impact-container-one flex flex-col justify-center items-center gap-6">
          <h2 className=' text-white sm:text-3xl font-bold 2xl:text-4xl text-2xl'>Our <span className=' bg-[#4158E8]'>Impact</span> in Numbers</h2>
            <p className=' text-white text-center w-[65%] mx-auto 2xl:text-2xl sm:text-sm text-[0.7em]'>
            Our outsourcing and manpower solutions have helped businesses in a
            wide range of industries to save time and money while reducing
            compliance risks.
          </p>
          <button className="buttonimpact bg-white text-blue-700 w-44 p-2 font-bold hover:bg-blue-500 hover:text-white transition duration-300 ease-out">Learn more</button>
        </div>

              {/* Container two holding stats table  */}
        <div name="impact-container-two" className="border-2 border-gray-600 bg-[#191919] md:w-[80%] w-[85%] mx-auto  mt-10 p-8 grid md:grid-cols-4 gap-2  rounded-md  2xl:gap-28 xs:grid-cols-2 grid-cols-1 " >
          
          <div className="impactstats space-y-2">
            <h1 className='text-gray-300 font-bold text-3xl'>20+</h1>
            <p className=' text-white lg:text-sm sm:text-[0.6em] text-[0.6em] '>Industries</p>
          </div>

          <div className="impactstats space-y-2">
            <h1 className=' text-gray-300 font-bold text-3xl'>1000+</h1>
            <p className=' text-white lg:text-sm sm:text-[0.6em] text-[0.6em] 2xl:w-72'>Resource Pool Available</p>
          </div>

          <div className="impactstats space-y-2">
            <h1 className=' text-gray-300 font-bold text-3xl'>20+</h1>
            <p className=' text-white lg:text-sm sm:text-[0.6em] text-[0.6em] 2xl:w-72'>Business Partnerships(Still Growing)</p>
          </div>

          <div className="impactstats space-y-2">
            <h1 className=' text-gray-300 font-bold text-3xl'>10+</h1>
            <p className=' text-white lg:text-sm sm:text-[0.6em] text-[0.6em]  2xl:w-64'>A M Global Team has 10+ Year’s experience in staffing business</p>
          </div>

        </div>
      </div>

      
      </>
  )
}

export default Impact
