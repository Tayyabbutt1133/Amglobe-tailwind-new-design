import React from 'react'
import house from '../../assets/Images/chooseUs.svg';
import './choose.css';

const Choose = () => {
  return (
      <>
          <div name="ChooseUs-Main-Container" className=' flex mt-44  items-center'>
              

              <div name="ChooseUs-left-div" className='lg:max-h-96 h-auto bg-[#141414] sm:rounded-tr-[20em] sm:rounded-br-[20em]  p-2 lg:w-[65%] 
                sm:w-[95%] w-[100%] hover:bg-blue-800 cursor-pointer transition duration-300 ease-in-out mx-6 sm:mx-0 rounded-2xl sm:rounded-none'>
                  <div name="chooseUs-content-wrapper"  className=' flex flex-col xs:gap-3 gap-10 sm:mx-8 xl:p-6 sm:p-4'>
                      <h1 className=' text-white sm:text-3xl text-2xl font-bold text-center sm:text-start'>Why<span className=' bg-[#4158E8]'> Choose</span> Us</h1>
                      <p className=' text-white xl:text-[0.8em] w-[100%] text-[0.74em] sm:w-[80%]'>A M Global has a proven track record of providing high-quality HR outsourcing and manpower supply solutions to businesses of all sizes. We are the leading provider of HR outsourcing services in the UAE and provide top-notch Manpower Supply, HR Outsourcing, and Recruitment Services to our clients.</p>
                      <span className=' text-gray-300 font-bold sm:text-lg xl:text-[0.9em] md:text-[0.9em]'>Let our experts help you find the right solution for your business needs today!</span>
                      <p className='text-white xl:text-[0.8em] w-[100%] text-[0.74em] sm:w-[80%]'>A M Global is one of the top outsourcing agencies that offer cutting-edge solutions for all your HR requirements. A M Global covering all the seven emirates and with plans of expansion to the GCC. We have experienced work force deployed across various industry segments and an employee pool with a mix of nationalities.By providing exemplary services we aim to focus on providing value to both to our clients and employees. This has helped us gain and maintain good business relationship with our existing clients and we hope to continue doing so in the future.</p>
                  </div>
              </div>


              <div name="Choose-right-div" className='lg:block hidden'>
                  <img src={house} alt="" className='relative grayscale max-h-[28rem] '/>
              </div>
      </div>
      </>
  )
}

export default Choose
