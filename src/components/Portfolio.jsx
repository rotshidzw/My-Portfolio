import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import math from "../assets/portfolio/math.jpg";
import usestate from "../assets/portfolio/usestate.jpg"
import reactWeather from "../assets/portfolio/reactWeather.jpg"

const portfolios = [
  {
    id: 1,
    src: installNode,
    href: 'https://space-travelers-hubs.netlify.app/',
    code: 'https://github.com/rotshidzw/space-travelers-hub'
  },
  {
    id: 2,
    src: reactSmooth,
    href: 'https://hammaazarok.github.io/javascript-capstone/',
    code: 'https://github.com/hammaazarok/javascript-capstone'
  },
  {
    id: 3,
    src: reactParallax,
    href: 'https://metricss-webapp.netlify.app/',
    code: 'https://github.com/rotshidzw/Metrics-webapp'
  },
  {
    id: 4,
    src: arrayDestruct,
    href: 'https://bookstorestorage.netlify.app/',
    code: 'https://github.com/rotshidzw/bookstore'
  },
  {
    id: 5,
    src: usestate,
    href: 'https://rotshidzw.github.io/capstone/',
    code: 'https://github.com/rotshidzw/capstone'
  },
  {
    id: 6,
    src: math,
    href: 'https://math-megician.netlify.app/',
    code: 'https://github.com/rotshidzw/react-math'
  },
  {
    id: 7,
    src: reactWeather,
    href: 'https://github.com/rotshidzw/clinic',
    code: 'https://github.com/rotshidzw/clinic'
  },
  {
    id: 8,
    src: navbar,
    href: 'https://github.com/ifzyy/school-libary',
    code: 'https://github.com/ifzyy/school-libary'
  },

];
const Portfolio = () => {


  function handlesubmit(href) {
    window.open(href)
  }


  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button onClick={() => handlesubmit(href)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button onClick={() => handlesubmit(code)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
