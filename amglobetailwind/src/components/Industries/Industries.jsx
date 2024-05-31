import React from "react";
import "./industries.css";
import industriesbg from "../../assets/Images/industries.svg";

const Industries = () => {
  return (
    <>
      <div name="Industries-main" className=" relative mt-96 xl:mx-0 w-[100%] xl:w-auto">
        <div name="Industries-serving-content-blue"
          className=" bg-[#4158E8] flex lg:justify-end xs:mx-12 mx-6 lg:mx-auto rounded-2xl lg:rounded-none"
        >
          <div
            name="Industries-content-wrapper "
            className="xl:p-16  lg:p-10 p-6  w-[100%] lg:w-auto"
          >
            <h1 className=" flex justify-center text-white text-3xl font-bold">INDUSTRIES THAT WE ARE SERVING</h1>
            <div name="Grid boxes" className="grid-boxes grid xl:grid-cols-3 gap-4 mt-8 lg:grid-cols-2 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1">
              <div className="border-2 px-6 py-2 text-sm text-center text-white cursor-pointer hover:bg-blue-950 hover:text-white duration-300 ease-in-out">AUTOMATION</div>
              <div className="border-2 px-6 py-2 text-sm text-center text-white cursor-pointer hover:bg-blue-950 hover:text-white duration-300 ease-in-out">AUTOMATION</div>
              <div className="border-2 px-6 py-2 text-sm text-center text-white cursor-pointer hover:bg-blue-950 hover:text-white duration-300 ease-in-out">AUTOMATION</div>
              <div className="border-2 px-6 py-2 text-sm text-center text-white cursor-pointer hover:bg-blue-950 hover:text-white duration-300 ease-in-out">AUTOMATION</div>
              <div className="border-2 px-6 py-2 text-sm text-center text-white cursor-pointer hover:bg-blue-950 hover:text-white duration-300 ease-in-out">AUTOMATION</div>
              <div className="border-2 px-6 py-2 text-sm text-center text-white cursor-pointer hover:bg-blue-950 hover:text-white duration-300 ease-in-out">AUTOMATION</div>
              <div className="border-2 px-6 py-2 text-sm text-center text-white cursor-pointer hover:bg-blue-950 hover:text-white duration-300 ease-in-out">AUTOMATION</div>
              <div className="border-2 px-6 py-2 text-sm text-center text-white cursor-pointer hover:bg-blue-950 hover:text-white duration-300 ease-in-out">AUTOMATION</div>
              <div className="border-2 px-6 py-2 text-sm text-center text-white cursor-pointer hover:bg-blue-950 hover:text-white duration-300 ease-in-out">AUTOMATION</div>
              <div className="border-2 px-6 py-2 text-sm text-center text-white cursor-pointer hover:bg-blue-950 hover:text-white duration-300 ease-in-out">AUTOMATION</div>
              <div className="border-2 px-6 py-2 text-sm text-center text-white cursor-pointer hover:bg-blue-950 hover:text-white duration-300 ease-in-out">AUTOMATION</div>
              <div className="border-2 px-6 py-2 text-sm text-center text-white cursor-pointer hover:bg-blue-950 hover:text-white duration-300 ease-in-out">AUTOMATION</div>
              <div className="border-2 px-6 py-2 text-sm text-center text-white cursor-pointer hover:bg-blue-950 hover:text-white duration-300 ease-in-out">AUTOMATION</div>
              <div className="border-2 px-6 py-2 text-sm text-center text-white cursor-pointer hover:bg-blue-950 hover:text-white duration-300 ease-in-out">AUTOMATION</div>
              <div className="border-2 px-6 py-2 text-sm text-center text-white cursor-pointer hover:bg-blue-950 hover:text-white duration-300 ease-in-out">AUTOMATION</div>
              <div className="border-2 px-6 py-2 text-sm text-center text-white cursor-pointer hover:bg-blue-950 hover:text-white duration-300 ease-in-out">AUTOMATION</div>
            </div>
          </div>
        </div>
        <div name="Industries-serving-img" className=" lg:block hidden">
          <img src={industriesbg} alt="" className="bg-indus absolute xl:-top-32 lg:top-0 top-12 xl:w-[40rem] xl:mx-32 lg:w-[30rem]"/>
        </div>
      </div>
    </>
  );
};

export default Industries;
