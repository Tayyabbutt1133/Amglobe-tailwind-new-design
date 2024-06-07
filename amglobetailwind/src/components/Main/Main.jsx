
import React from "react";
import mainfront from "..//../assets/Images/mainbg.svg";
import flower from "..//../assets/Images/flower.svg";
import { Fade } from "react-awesome-reveal";

import {Cursor, Typewriter, useTypewriter} from 'react-simple-typewriter';

const Main = () => {

  const [text] = useTypewriter({
    words: ['Outsourcing your HR needs has never been easier!'],
    loop:{}
  
  });





  return (
    // Main 
    <div name="Main-outer" className="h-screen flex items-center justify-center mt-32">
      {/* Main container For image  */}
      <div name="Main-Container-bg-img" className="bg-cover w-[90%] h-full" style={{ backgroundImage: `url(${mainfront})` }}>
        
        {/* Blue background div  */}
        <div
          name="Main-Container-inner"
          className="bg-[#4158E8D9] text-white p-6 w-[70%] mx-auto absolute top-80 right-0 xl:h-full"
        >

          {/* Content inside that div  */}
           <div name="Heading" className="absolute -left-16 top-14 md:w-[80%]">
            <h1 className="font-Jakarta sm:text-4xl font-bold text-3xl">
              {text}
              <Cursor/>
            </h1>
          </div>

         <div name="Flower-img" className="hidden lg:block lg:absolute right-40 top-28">
         <img src={flower} alt=""/> 
         </div>


          <div name="Para-button-aligned-box" className="sm:ml-12">
           <p name="Paragraph" className="text-sm w-full mt-48 sm:w-[60%]">
            A M Global is the leading provider of HR outsourcing services, and
            we provide a comprehensive suite of services that allow businesses
            to focus on their core competencies and leave the HR functions to
            us.
          </p>

          <button className="bg-white text-[#4158E8D9] h-10 w-36 mt-12 flex justify-center items-center font-bold hover:bg-blue-400 hover:text-white transition duration-300">
            Learn more
          </button>
          </div> 


        </div>


        </div>
    </div>
  );
};

export default Main;
