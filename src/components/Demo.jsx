
import React from "react";
import video1 from "../assets/llm4.mp4";
import video2 from "../assets/llm3.mp4"
const Demo = () => {
  return (
    <>
     <div className="flex flex-col items-center mt-6 lg:mt-20" id="Demo Video">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Demo of our 
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
         LLM
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      <b>Prompt : </b> Can you write a java code for a proxy server. 
      </p>
     
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg  border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
   
   
      </div>

      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Demo of our 
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
         LLM
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      <b>Prompt : </b>Can you give a python code to read a file. 
      </p>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg  border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
   
   
      </div>

    </div>
    </>
  );
};

export default Demo;
