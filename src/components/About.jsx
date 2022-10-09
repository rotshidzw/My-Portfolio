import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white text-center"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10 border-dashed border-2 border-sky-500">
        Hi! My name is Rotshidzwa Chester Mavhungu. I grew up in South Africa,
         I started my development path at Richfield institution of technology,
          I had no idea about how these things are done and had a desire for coding and software development.
           I did a "3" years course at Richfield institution of technology studying for a diploma in information technology.
         I had to develop using different languages such as PHP vbNET, HTML CSS, javascript, and c++. 
        </p>

        <br/>

        <p className="text-xl border-dotted border-2 border-sky-500">
        NOW I am a full-stack developer, and I specialize in Javascript,
         CSS & HTML & redux & react & GitHub that work across all outlets and browsers.
         I care deeply about building usable and agreeable interfaces for the most number 
         of people possible and am also doing my lessons at microverse.
         In this remote software development school,
         we get to code with other developers every day.
        </p>
        <br />
      </div>
    </div>
  );
};

export default About;
