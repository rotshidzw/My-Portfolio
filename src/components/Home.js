import React from 'react';
import HeroImage from '../assets/heroImage.png';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'




function home() {
  return <div name="home" className ="h-screen w-full bg-gradient-to-b from-black via-black  to-gray-800">


    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-8xl font-bold text-white animate__jackInTheBox ">
                I am a full stack developer 

            </h2>

            <p className="text-gray-500  py-6 max-w-md">
            I am a success-driven person with 1 and half years of experiance ready to help 
            with my full-stack development skills. 
            I am looking to join a team in which communication and 
            teamwork are paramount I can jump into any opportunity.
            React, Tailwind, JavaScript, Redux, jQuery, HTML5, CSS3
            Back-End: Ruby, Rails, MySQL
            </p>
            <div>
                <button className="text-white group w-fit px-6 py-3 my-2 flex  item-center rounded-md bg-gradient-to-r  cursor-pointer   overflow-hidden  from-indigo-500 via-purple-500 to-pink-500 hover:opacity-70">
                    portfolio
                    <span className="group-hover:rotate-90 duration-300 ">
                      <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span></button>
            </div>
        </div>
        <div><img src={HeroImage} 
        alt ="my profile" className="rounded-[40rem] mx-auto w-[50%] md:w-full "/> </div>
    </div>
  </div>;
  
}

export default home