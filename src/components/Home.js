import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { zoomIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import HeroImage from '../assets/heroImage.png';

const styles = {
  zoomIn: {
    animation: 'x 7s',
    animationName: Radium.keyframes(zoomIn, 'zoomIn'),
  },
};

function home() {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black  to-gray-800">

      <div className="max-w-screen-lg pt-[50px] mx-auto flex flex-col items-center justify-center  px-6 md:flex-row">
        <div className="flex flex-col justify-center h-full ">
          <h2 className="text-4xl sm:text-8xl font-boldflex font-semibold text-purple-600">
            <span className="animate-waving-hand">👋🏻</span>
            I am a Full-stack Developer

          </h2>
          <StyleRoot>
            <p className="text-white  py-6 max-w-md" style={styles.zoomIn}>
              I am a success-driven person with 1 and half years of experiance ready to help
              with my full-stack development skills.
              I am looking to join a team in which communication and
              teamwork are paramount I can jump into any opportunity.
              React, Tailwind, JavaScript, Redux, jQuery, HTML5, CSS3
              Back-End: Ruby, Rails, MySQL
            </p>
          </StyleRoot>
          <div>
            <button alt="" className="text-white group w-fit px-6 py-3 my-2 flex  item-center rounded-md bg-gradient-to-r  cursor-pointer   overflow-hidden  from-indigo-500 via-purple-500 to-pink-500 hover:opacity-70">
              portfolio
              <span className="group-hover:rotate-90 duration-300 ">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-[40rem] mx-auto w-[50%] md:w-full "
          />
          {' '}

        </div>
      </div>
    </div>
  );
}

export default home;
