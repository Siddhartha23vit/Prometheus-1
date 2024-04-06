import React from "react";


import video from "../assets/drag.mp4";
import video1 from "../assets/llm4.mp4";
import video3 from "../assets/dashboard.mp4";
import video4 from "../assets/trainlln.mp4";
const Portfolio = () => {
  return (
    <>
    
    <section>
    <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Our
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          Portfolio
        </span>
      </h1>
                <div class="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
        
                  <div class="relative px-6 py-20 overflow-hidden bg-gradient-to-r from-orange-500 to-red-800 border isolate sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 xl:px-24">
                    
                    <div class="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
                      <div class="lg:row-start-2 lg:max-w-md">
                        <h1 class="text-3xl font-semibold tracking-tighter text-white-900">
                          Building agents together whenever required.
                        </h1>
                        <p class="mt-4 text-base font-medium text-gray-900 text-balance">
                          Control and added security.Users have more
                          control over their data and transactions, and the platform is less
                          susceptible to malicious attacks.
                        </p>
                      </div>
                      <div class="p-2 overflow-hidden border rounded-3xl relative shadow-lg bg-gray-50 -z-20 min-w-full max-w-xl lg:row-span-4 lg:w-[64rem] lg:max-w-none">
                      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg  border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
   
   
      </div>
                      </div>
                      <div class="flex flex-col max-w-xl mt-12 gap-y-12 lg:gap-y-16 text-balance lg:row-start-3 lg:mt-10 lg:max-w-md">
                        <div class="flex flex-col gap-4 lg:flex-row">
                          <div>
                            <span class="flex items-center justify-center bg-white rounded-full size-8"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="text-gray-600 size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"></path></svg></span>
                          </div>
                          <div>
                            <h3 class="font-medium text-gray-900">Drag and drop tool</h3>
                            <p class="mt-2 text-sm font-medium text-white-500">
                             Drag and drop the necessary agents, group chats and so on. To formulate specific tasks.
                            </p>
                          </div>
                        </div>
                        <div class="flex flex-col gap-4 lg:flex-row">
                          <div>
                            <span class="flex items-center justify-center bg-white rounded-full size-8"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="text-gray-600 size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"></path></svg></span>
                          </div>
                          <div>
                            <h3 class="font-medium text-gray-900">Custom info</h3>
                            <p class="mt-2 text-sm font-medium text-white-500">
                              Customise your agents to do specific tasks.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            


              <section>
                <div class="px-8 py-24 mx-auto  md:px-12 lg:px-32 max-w-7xl">
                  <div class="grid items-center grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
                    <div class="md:order-first">
                      <h1 class="text-4xl font-semibold tracking-tighter text-white-900 text-balance">
                        User Usage data analystics,
                        <span class="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text"> swift and dynamically.</span>
                      </h1>
                      <p class="mt-4 text-base font-medium text-white-500">
                        Analyse the token data of usage and derive metrics that can be used to determine the most commonly
                        used phrases , terms ideas which can be utilized to train the staff.
                      </p>
              
                      <dl class="grid grid-cols-2 gap-4 mt-12 list-none lg:gap-6 text-pretty">
                        <div>
                          <div>❖</div>
                          <dt class="mt-4 font-medium text-white-900">
                          Track User Queries
                          </dt>
                          <dd class="mt-2 text-sm text-gray-500">
                          Understand what users are asking the LLM, identifying common themes, trends, and knowledge gaps.
                          </dd>
                        </div>
                        <div>
                          <div>❖</div>
                          <dt class="mt-4 font-medium text-white-900">
                          Identify Usage Patterns
                          </dt>
                          <dd class="mt-2 text-sm text-gray-500">
                          Uncover patterns in user behavior to optimize the LLM's performance and offer more relevant responses in the future.
                          </dd>
                        </div>
                      </dl>
                    </div>
                    <div class="order-first block w-full mt-12 aspect-square lg:mt-0">
                      <div class="h-flex p-3 overflow-hidden border shadow-lg bg-gray-50 rounded-3xl">
                        {/* <img alt="#_" class="relative w-full rounded-2xl drop-shadow-2xl" src="/images/appify/phone.png"> */}
                              <video
                                  autoPlay
                                  loop
                                  muted
                                  className="rounded-lg  border border-orange-700 shadow-sm shadow-orange-400  relative w-full rounded-2xl drop-shadow-2x"
                              >
                                  <source src={video} type="video/mp4" />
                                  Your browser does not support the video tag.
                              </video>
                              <video
                                  autoPlay
                                  loop
                                  muted
                                  className="rounded-lg  border border-orange-700 shadow-sm shadow-orange-400  relative w-full rounded-2xl drop-shadow-2x"
                              >
                                  <source src={video3} type="video/mp4" />
                                  Your browser does not support the video tag.
                              </video>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section>
              <div className="flex flex-col items-center mt-6 lg:mt-20" id="Demo Video">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Train your own
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
         LLM
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      <b></b> The customer can train create their own data set depending on the type of output they need.
      </p>
     
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg  border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
   
   
      </div>
      </div>
              </section>
            
            

    </>
  );
};

export default Portfolio;
