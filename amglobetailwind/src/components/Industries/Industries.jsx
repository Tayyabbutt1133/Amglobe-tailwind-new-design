import React from "react";
import "./industries.css";
import industriesbg from "../../assets/Images/industries.svg";

const Industries = () => {
  return (
    <>
      <div name="industriesMain" className="mt-64 relative">
        <div
          name="rightcontainer-box"
          className="text-white bg-[#4158E8] p-6 2xl:p-16 xs:w-[100%] mx-4 xs:mx-0 xs:rounded-none rounded-2xl"
        >
          <h1 className="sm:text-2xl font-bold xs:text-xl 2xl:text-5xl flex md:justify-end xl:mx-36 lg:mx-20 md:text-xl lg:text-2xl justify-center W">
            INDUSTRIES THAT WE ARE SERVING
          </h1>
          <div className="rightcontainer-list mt-5 grid lg:grid-cols-3 xs:grid-cols-2">
            <div className="Inner-list hover:bg-white hover:text-[#4158E8] transition duration-300 ease-in-out">Automation</div>
            <div className="Inner-list hover:bg-white hover:text-[#4158E8] transition duration-300 ease-in-out">Automation</div>
            <div className="Inner-list hover:bg-white hover:text-[#4158E8] transition duration-300 ease-in-out">Automation</div>
            <div className="Inner-list hover:bg-white hover:text-[#4158E8] transition duration-300 ease-in-out">Automation</div>
            <div className="Inner-list hover:bg-white hover:text-[#4158E8] transition duration-300 ease-in-out">Automation</div>
            <div className="Inner-list hover:bg-white hover:text-[#4158E8] transition duration-300 ease-in-out">Automation</div>
            <div className="Inner-list hover:bg-white hover:text-[#4158E8] transition duration-300 ease-in-out">Aviation</div>
            <div className="Inner-list hover:bg-white hover:text-[#4158E8] transition duration-300 ease-in-out">Aviation</div>
            <div className="Inner-list hover:bg-white hover:text-[#4158E8] transition duration-300 ease-in-out">Aviation</div>
            <div className="Inner-list hover:bg-white hover:text-[#4158E8] transition duration-300 ease-in-out">Aviation</div>
            <div className="Inner-list hover:bg-white hover:text-[#4158E8] transition duration-300 ease-in-out">Aviation</div>
            <div className="Inner-list hover:bg-white hover:text-[#4158E8] transition duration-300 ease-in-out">Aviation</div>
            <div className="Inner-list hover:bg-white hover:text-[#4158E8] transition duration-300 ease-in-out">Automation</div>
            <div className="Inner-list hover:bg-white hover:text-[#4158E8] transition duration-300 ease-in-out">Automation</div>
            <div className="Inner-list hover:bg-white hover:text-[#4158E8] transition duration-300 ease-in-out">Automation</div>
            <div className="Inner-list hover:bg-white hover:text-[#4158E8] transition duration-300 ease-in-out">Automation</div>
          </div>
        </div>

        <div className="industriesContainer absolute xl:-top-20 lg:-left-16 top-14 -left-28 md:block hidden">
          <div className="leftcontainter-box mx-28 xl:w-[60%] lg:w-[50%] w-[45%]">
            <img src={industriesbg} alt="" />
          </div>
              </div>
          
      </div>
    </>
  );
};

export default Industries;
