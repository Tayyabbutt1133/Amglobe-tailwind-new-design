import React from "react";
import sol from "../../assets/Images/SolImg.svg";
import solLines from "../../assets/Images/sol-lines.svg";

const Sol = () => {
  return (
    <>
      {/* Solution Outer */}
      <div
        name="Solution-Main"
        className="flex-col font-Jakarta flex lg:flex-row lg:items-start mt-[29rem] xl:mt-[22rem]"
      >
          {/* Left div-Solution Inner Container */}
          <div name="Solution-left"
            className=" text-white  flex gap-6 flex-col sm:px-32 mx-4 sm:mx-0 "
          >
            <h1 className="sm:text-3xl font-bold lg:w-[85%] text-2xl 2xl:text-5xl">
              HR Outsourcing &
              <span className=" bg-[#4158E8]">Manpower</span> Supply{" "}
              <span className=" bg-[#4158E8]">Solutions</span> Diverse
              Capabilities
            </h1>
            <p className=" text-[#cecece] sm:text-sm lg:w-[80%] text-[0.7em] 2xl:text-xl">
              With A M Global you can outsource your entire HR function or any
              specific HR services that you may need. We will work with you to
              develop a customized solution that meets your specific business
              needs with ease.
            </p>
            <div name="buttons" className="grid grid-cols-2 gap-6 sm:w-[90%] w-[100%] ">
              <button className="buttonsol xs:text-[0.65em] text-[0.6em] w-[100%] h-14 bg-gray-900 text-white sm:text-[0.8em] font-medium border border-gray-900 rounded transition duration-300 ease-in-out hover:bg-blue-500 2xl:text-lg">
                Efficient & Cost-Effective
              </button>
              <button className="buttonsol xs:text-[0.65em] text-[0.6em] w-[100%] h-14 bg-gray-900 text-white sm:text-[0.8em] font-medium border border-gray-900 rounded transition duration-300 ease-in-out hover:bg-blue-500 2xl:text-lg">
                Experienced & Professional Team
              </button>
              <button className="buttonsol xs:text-[0.65em] text-[0.6em] w-[100%] h-14 bg-gray-900 text-white sm:text-[0.8em] font-medium border border-gray-900 rounded transition duration-300 ease-in-out hover:bg-blue-500 2xl:text-lg">
                Streamlined & Customized Solutions
              </button>
              <button className="buttonsol xs:text-[0.65em] text-[0.6em] w-[100%] h-14 bg-gray-900 text-white sm:text-[0.8em] font-medium border border-gray-900 rounded transition duration-300 ease-in-out hover:bg-blue-500 2xl:text-lg">
                Comprehensive Suite of Services
              </button>
            </div>
          </div>

        




          {/* Right div-Solution Inner Container */}
          <div name="Solution-right" className="lg:w-[45em] hidden sm:block relative lg:bottom-14 bottom-32 2xl:right-0">
            <img
              src={solLines}
              alt=""
              className="lg:w-[18em] absolute right-0 w-[14em] 2xl:w-[23em]"
            />
            <img
              src={sol}
              alt=""
              className="absolute lg:w-[25em]  right-0 grayscale top-60 w-[17em] 2xl:w-[30em]"
            />
        </div>
        
        </div>
    </>
  );
};

export default Sol;
