import React from 'react'
import './industries.css';
import industriesbg from '../../assets/Images/industries.svg';



const Industries = () => {
  return (
      <>
        <div name="industriesMain" className=' mt-64'>
          <div className="industriesContainer relative ">
                <div className="leftcontainter-box lg:w-[50%] md:w-[70%] w-[80%] lg:block hidden 2xl:w-[90%] lg:mx-20 2xl:mx-56">
                  <img src={industriesbg} alt="" />
              </div>
              <div name="rightcontainer-box" className=' text-white bg-[#4158E8] lg:w-[50%] sm:absolute lg:top-52 top-10  p-10 sm:right-20 2xl:left-[40em] 2xl:p-16 xs:w-[80%] xs:mx-auto mx-4'>
                  <h1 className='sm:text-3xl flex justify-center font-bold xs:text-xl  text-lg 2xl:text-5xl'>Industries that we are serving</h1>
                  <div className="rightcontainer-list grid lg:grid-cols-3 gap-8 p-10 xs:grid-cols-2">
                      <div className="h-[2em] flex justify-center items-center cursor-pointer transition duration-300 hover:bg-white hover:text-blue-700 border-2  p-5 text-[0.7em] sm:text-[0.9em]">Automation</div>
                      <div className="h-[2em] flex justify-center items-center cursor-pointer transition duration-300 hover:bg-white hover:text-blue-700 border-2  p-5 text-[0.7em] sm:text-[0.9em]">Automation</div>
                      <div className="h-[2em] flex justify-center items-center cursor-pointer transition duration-300 hover:bg-white hover:text-blue-700 border-2  p-5 text-[0.7em] sm:text-[0.9em]">Automation</div>
                      <div className="h-[2em] flex justify-center items-center cursor-pointer transition duration-300 hover:bg-white hover:text-blue-700 border-2  p-5 text-[0.7em] sm:text-[0.9em]">Automation</div>
                      <div className="h-[2em] flex justify-center items-center cursor-pointer transition duration-300 hover:bg-white hover:text-blue-700 border-2  p-5 text-[0.7em] sm:text-[0.9em]">Automation</div>
                      <div className="h-[2em] flex justify-center items-center cursor-pointer transition duration-300 hover:bg-white hover:text-blue-700 border-2  p-5 text-[0.7em] sm:text-[0.9em]">Automation</div>
                      <div className="h-[2em] flex justify-center items-center cursor-pointer transition duration-300 hover:bg-white hover:text-blue-700 border-2  p-5 text-[0.7em] sm:text-[0.9em]">Aviation</div>
                      <div className="h-[2em] flex justify-center items-center cursor-pointer transition duration-300 hover:bg-white hover:text-blue-700 border-2  p-5 text-[0.7em] sm:text-[0.9em]">Aviation</div>
                      <div className="h-[2em] flex justify-center items-center cursor-pointer transition duration-300 hover:bg-white hover:text-blue-700 border-2  p-5 text-[0.7em] sm:text-[0.9em]">Aviation</div>
                      <div className="h-[2em] flex justify-center items-center cursor-pointer transition duration-300 hover:bg-white hover:text-blue-700 border-2  p-5 text-[0.7em] sm:text-[0.9em]">Aviation</div>
                      <div className="h-[2em] flex justify-center items-center cursor-pointer transition duration-300 hover:bg-white hover:text-blue-700 border-2  p-5 text-[0.7em] sm:text-[0.9em]">Aviation</div>
                      <div className="lists h-[2em] flex justify-center items-center cursor-pointer transition duration-300 hover:bg-white hover:text-blue-700 border-2 p-5 text-[0.7em] sm:text-[0.9em]">Aviation</div>
                      <div className="h-[2em] flex justify-center items-center cursor-pointer transition duration-300 hover:bg-white hover:text-blue-700 border-2  p-5 text-[0.7em] sm:text-[0.9em]">Automation</div>
                      <div className="h-[2em] flex justify-center items-center cursor-pointer transition duration-300 hover:bg-white hover:text-blue-700 border-2  p-5 text-[0.7em] sm:text-[0.9em]">Automation</div>
                      <div className="h-[2em] flex justify-center items-center cursor-pointer transition duration-300 hover:bg-white hover:text-blue-700 border-2  p-5 text-[0.7em] sm:text-[0.9em]">Automation</div>
                      <div className="h-[2em] flex justify-center items-center cursor-pointer transition duration-300 hover:bg-white hover:text-blue-700 border-2  p-5 text-[0.7em] sm:text-[0.9em]">Automation</div>
                  </div> 
              </div>
          </div>
    </div>
      
      </>
  )
}

export default Industries
