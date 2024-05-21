import React from 'react'
import house from '../../assets/Images/chooseUs.svg';

const Choose = () => {
  return (
      <>
          <div name="ChooseUs-Main-Container" className=' flex mt-44'>
              <div name="ChooseUs-left-div" className=' bg-[#141414] xs:rounded-tr-[20em] xs:rounded-br-[20em]  p-2 lg:w-[70%] 
                xs:w-[90%] w-[100%] hover:bg-blue-800 cursor-pointer transition duration-300 ease-in-out mx-6 xs:mx-0 rounded-2xl xs:rounded-none'>
                  <div name="chooseUs-content-wrapper"  className=' flex flex-col xs:gap-3 gap-10 sm:mx-8 sm:p-4'>
                      <h1 className=' text-white sm:text-3xl text-2xl font-bold text-center xs:text-start'>Why<span className=' text-blue-500'> Choose</span> Us</h1>
                      <p className=' text-white sm:text-[0.8em] sm:w-[95%] text-[0.8em] xs:w-[80%]'>A M Global has a proven track record of providing high-quality HR outsourcing and manpower supply solutions to businesses of all sizes. We are the leading provider of HR outsourcing services in the UAE and provide top-notch Manpower Supply, HR Outsourcing, and Recruitment Services to our clients.</p>
                      <span className=' text-gray-300 font-bold sm:text-lg text-[0.9em]'>Let our experts help you find the right solution for your business needs today!</span>
                      <p className=' text-white sm:text-[0.8em] text-[0.8em]  sm:w-[95%] xs:w-[80%]'>A M Global is one of the top outsourcing agencies that offer cutting-edge solutions for all your HR requirements. A M Global covering all the seven emirates and with plans of expansion to the GCC. We have experienced work force deployed across various industry segments and an employee pool with a mix of nationalities.By providing exemplary services we aim to focus on providing value to both to our clients and employees. This has helped us gain and maintain good business relationship with our existing clients and we hope to continue doing so in the future.</p>
                  </div>
              </div>
              <div name="Choose-right-div" className=' h-72 lg:block hidden'>
                  <img src={house} alt="" className=' h-96 relative bottom-14 right-10 grayscale'/>
              </div>
      </div>
      </>
  )
}

export default Choose
