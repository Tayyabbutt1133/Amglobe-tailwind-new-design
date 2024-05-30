import React from "react";
import './services.css';
import servicesImg from "../../assets/Images/ServiceMan.svg";
import servicesbg from "../../assets/Images/MenBack.svg";
import greyflower from "../../assets/Images/flower2.svg";
import serv1 from "../../assets/Images/authorize 1.svg";
import serv2 from "../../assets/Images/authorize 2.svg";
import serv3 from "../../assets/Images/authorize 3.svg";
import serv4 from "../../assets/Images/authorize 4.svg";
import serv5 from "../../assets/Images/authorize 5.svg";
import serv6 from "../../assets/Images/authorize 6.svg";

const Services = () => {
  return (
    <>
      {/* services main outer div  */}
      <div name="Services-Main-container" className=" md:mt-[38em] lg:mt-[40em] sm:mt-[50em] xs:mt-[80em] mt-[85em]">
        {/* Flower image to position in div with absolute */}
        
        <img src={greyflower} alt="" className=" relative lg:left-[55em] 2xl:left-[60em] hidden lg:block" />

        {/* Main flex content container  */}
        {/* <div name="services-Main-Inner" className=" gap-0 border-2 border-red-600"> */}

          <div name="services-Main-Inner-Wrapper" className=" flex justify-between">
            <div name="services-left-content-box" className="">
              <div
                name="services-content-wrapper"
                className=" lg:w-[80%] lg:mx-20 flex flex-col gap-10 items-center justify-center lg:items-start lg:justify-start w-screen"
              >
                <h1 className=" text-white sm:text-4xl font-bold 2xl:text-6xl text-3xl">Our Services</h1>
                <p className=" text-white lg:w-[70%] 2xl:text-3xl text-center lg:text-start text-sm xs:mx-16 lg:mx-0">
                  Concise talent management solutions that matches with a
                  particular industry, geography, or business requirement.
                </p>
                <button
                  name="servicesButton"
                  className=" bg-white lg:w-[20%] w-[11em] h-12 font-bold text-blue-600 hover:bg-blue-500 hover:text-white transition ease-in-out"
                >
                  Learn more
                </button>
              </div>
            </div>

            <div name="services-right-Image-box" className=" relative lg:block hidden">
              <img src={servicesbg} className=" w-80 2xl:w-[30rem]" alt="" />
              <img
                src={servicesImg}
                alt=""
                className="xl:w-64 absolute top-12 right-0 2xl:w-96 2xl:top-20 w-60"
              />
            </div>


          </div>

          
          <div name="servicesMain-content" className="flex flex-col gap-8 lg:p-8 mx-6 mt-10 lg:mt-0 ">
            {/* services box container one  */}
            <div name="services-content-one"
              className=" flex   text-white gap-5 lg:flex-row flex-col"
            >
              <div name="servicesboxes"  className="bg-[#212121] p-8 border-radius cursor-pointer hover:bg-blue-600 transition duration-300 ease-in-out min-h-96 space-y-4  lg:w-[30%]">
                <img src={serv1} alt="" />
                <h1 className="text-[1.2em] font-bold">Manpower Supply</h1>
                <p className="xl:text-[0.85em] 2xl:text-xl text-[0.75em]  max-h-[100%]"> 
                  We provide a comprehensive range of manpower solutions to help
                  businesses stay staffed and productive.
                </p>
              </div>

              <div name="servicesboxes"  className="bg-[#212121]  p-8 border-radius cursor-pointer hover:bg-blue-600 transition duration-300 ease-in-out min-h-96 space-y-4 lg:w-[30%]">
                <img src={serv2} alt="" />
                <h1 className="text-[1.2em] font-bold">HR Outsourcing</h1>
                <p className="xl:text-sm 2xl:text-xl text-[0.75em]  max-h-[100%]"> 
                Our team of HR professionals can take on all your HR needs, from payroll to benefits administration.
                </p>
              </div>
            
            </div>





            <div name="services-content-two"
              className=" grid  text-white gap-4 lg:grid-cols-4"
            >
              <div name="servicesboxes"  className="bg-[#212121]  p-6 border-radius cursor-pointer hover:bg-blue-600 transition duration-300 ease-in-out space-y-4 max-h-[100%]">
                <img src={serv3} alt="" />
                <h1 className="text-[1.2em] font-bold">Recruitment Services</h1>
                <p className="xl:text-[0.85em] 2xl:text-xl text-[0.75em]  max-h-[100%]"> 
                Let our experts help you find the best talent for your open positions to keep your business moving forward.
                </p>
              </div>
              <div name="servicesboxes"  className="bg-[#212121] p-6 border-radius cursor-pointer hover:bg-blue-600 transition duration-300 ease-in-out space-y-4 max-h-[100%]">
                <img src={serv4} alt="" />
                <h1 className="text-[1.2em] font-bold">PEO Services</h1>
                <p className="xl:text-[0.85em] 2xl:text-xl text-[0.75em]  max-h-[100%]"> 
                Our PEO services can help businesses save time and money while reducing compliance risks.
                </p>
              </div>
              <div name="servicesboxes"  className="bg-[#212121] p-6 border-radius cursor-pointer hover:bg-blue-600 transition duration-300 ease-in-out space-y-4 max-h-[100%]">
                <img src={serv5} alt="" />
                <h1 className="text-[1.2em] font-bold">Customized Solutions</h1>
                <p className="xl:text-[0.85em] 2xl:text-xl text-[0.75em] max-h-[100%]"> 
                Our highly efficient & experienced team provides IT Staffing solutions to companies across Gulf countries, India, Pakistan and USA. Our IT Staff Augmentation team has successfully delivered both short-term and long-term solutions as well as project-based deployment and we provide our customers a concise talent management solutions that matches with a particular industry, geography, or business requirement.

                </p>
              </div>
              <div name="servicesboxes"  className="bg-[#212121] p-6 border-radius cursor-pointer hover:bg-blue-600 transition duration-300 ease-in-out space-y-4 max-h-[100%]">
                <img src={serv6} alt="" />
                <h1 className="text-[1.2em] font-bold">Payroll Services</h1>
                <p className="xl:text-[0.85em] 2xl:text-xl text-[0.75em]  max-h-[100%]"> 
                Managing payroll, accounting, and all other financial responsibilities in house and at once is time-consuming and prone to errors. We work in partnership with our clients to develop, implement and manage bespoke payroll services. Our services are in line with the WPS and our clients enjoy considerable cost savings and can focus on core activities of the business.
                </p>
              </div>
            </div>


          </div>

        {/* </div> */}
        

      </div>
    </>
  );
};

export default Services;
