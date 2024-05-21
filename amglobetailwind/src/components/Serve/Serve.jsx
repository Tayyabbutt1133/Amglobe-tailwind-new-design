import React from "react";
import servicesbg from "../../assets/Images/services.svg";

const Serve = () => {
  return (
    <>
      {/* Services Main  */}
          <div name="Services-Main" className="relative sm:top-96 top-28">
              



        {/* Services Main bg image  */}
        <div name="Services-bg" className="lg:w-[36em] 2xl:w-[75em] xs:w-96 w-60">
          <img className=" grayscale" src={servicesbg} alt="" />
        </div>

              


        {/* Content Div  */}
        <div name="services-Main-content" className="absolute top-0 lg:w-[80%]  my-44 font-Jakarta lg:ml-32 xs:ml-48 ml-20 flex lg:flex-row flex-col">

                  
          {/* Services-left-content-box  */}
          <div name="Services-flexbox-left" className="bg-[#4158E8D9] border-2 border-[#4158E8D9]">
            {/* <div name="Job-seeker-banner"
              className="max-w-28 flex items-center justify-center bg-black text-white absolute lg:top-20 top-9 left-7 transform -rotate-12 w-[10em] h-[2em] font-bold"
            >
              Job Seeker
            </div> */}
            <div
              name="flexbox-left-content"
              className="flex flex-col gap-4 lg:p-20 p-8 2xl:p-52"
            >
              <h1 className=" text-white text-2xl font-bold">
                We help candidates find their perfect job
              </h1>
              <p className=" text-white text-[0.8em]">
                Concise talent management solutions that matches with a
                particular industry, geography, or business requirement.
              </p>
              <button
                name="flex-left-button"
                className=" bg-white  text-[0.9em] p-2 font-bold text-[#4158E8D9] sm:w-[50%] w-[70%]  hover:bg-blue-300 hover:text-white "
              >
                Start Applying
              </button>
            </div>
          </div>
          
           {/* Services-right-content-box */}
           <div name="Services-flexbox-left" className="bg-[#4158E8D9]">
            {/* <div name="Job-seeker-banner"
                          className="max-w-28 lg:flex items-center justify-center bg-black text-white absolute lg:top-[5.5em]  lg:right-4 transform lg:rotate-12  w-[10em] h-[2em] font-bold hidden"
            >
             Companies 
            </div> */}
            <div name="flexbox-right-content"
              className="flex flex-col gap-4  lg:p-20 p-8  2xl:p-52 border-2 border-[#4158E8D9]"
            >
              <h1 className=" text-white text-2xl font-bold">
              We provide staffing
Solution to our clients
              </h1>
              <p className=" text-white text-[0.8em]">
                Concise talent management solutions that matches with a
                particular industry, geography, or business requirement.
              </p>
              <button
                name="flex-left-button"
                className=" bg-white  text-[0.9em] p-2 font-bold text-[#4158E8D9]  sm:w-[50%] w-[70%] hover:bg-blue-300 hover:text-white "
              >
                Start Applying
              </button>
            </div>
          </div>
          

        </div>
              
    
    </div>
    </>
  );
};

export default Serve;
