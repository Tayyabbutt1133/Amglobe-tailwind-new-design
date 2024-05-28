import React from "react";
import servicesbg from "../../assets/Images/services.svg";

const Serve = () => {
  return (
    <>
      {/* Services Main */}
      <div name="Services-Main" className="relative sm:top-96 top-28">
        {/* Services Main bg image */}
        <div
          name="Services-bg"
          className="lg:w-[50%] 2xl:w-[50em] w-[90%] sm:block hidden"
        >
          <img className="grayscale" src={servicesbg} alt="" />
        </div>

        {/* Content Div */}
        <div
          name="Banner"
          className="flex sm:mx-20 mx-4 absolute top-36 lg:flex-row flex-col"
        >
          <div
            name="Banner-left"
            className="relative text-white bg-[#4158E8D9] xl:w-[50%] lg:py-32 sm:px-16 py-20 px-4"
          >
            <div
              name="Banner-left-content-wrapper"
              className="flex flex-col gap-8"
            >
              <div
                name="Job-Seeker-Banner"
                className="bg-black text-white w-[8em] sm:flex hidden items-center justify-center p-2 absolute lg:top-24 lg:left-4 left-4 top-10 transform -rotate-12"
              >
                Job Seeker
              </div>
              <h1 className="text-3xl xl:text-4xl font-bold xl:w-[80%]">
                We help candidates find their perfect job
              </h1>
              <p className="w-[90%]">
                Concise talent management solutions that matches with a
                particular industry, geography, or business requirement.
              </p>
              <button className="bg-white text-[#4158E8D9] max-w-[50%] h-10 font-bold">
                Start Applying
              </button>
            </div>
          </div>

          <div
            name="Banner-right"
            className="relative text-white bg-[#4158E8D9] xl:w-[50%] lg:py-32 sm:px-16 py-20 px-4"
          >
            <div
              name="Banner-right-content-wrapper"
              className="flex flex-col gap-8"
            >
              <div
                name="Companies-Seeker-Banner"
                className="bg-black text-white w-[8em] sm:flex hidden items-center justify-center p-2 absolute lg:top-[6.5rem] lg:right-32 right-20 top-14 transform rotate-12"
              >
                Companies
              </div>
              <h1 className="text-3xl xl:text-4xl font-bold xl:w-[90%]">
                We provide staffing Solution to our clients
              </h1>
              <p className="xl:w-[95%]">
                Concise talent management solutions that matches with a
                particular industry, geography, or business requirement.
              </p>
              <button className="bg-white text-[#4158E8D9] max-w-[50%] h-10 font-bold">
                View Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Serve;
