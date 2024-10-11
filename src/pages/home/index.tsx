import React from "react";
import { FiAlertOctagon, FiArrowRightCircle } from "react-icons/fi";

import "./homePage.css";
import Carousel from "./blocks/Carousel";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-5">
      <section className="flex justify-evenly items-center">
        <article className="flex flex-col justify-center items-center bg-white">
          <h3>Profile Card</h3>
          <div className="px-10 pb-10 pt-5 relative rounded-lg shadow-lg flex flex-col justify-center items-center gap-5 overflow-hidden">
            <div className="header-wave bg-purple-700"></div>
            <div className="header-second-wave border-purple-400"></div>
            <img
              src="https://miro.medium.com/v2/resize:fit:1200/1*HmtkzxNYchDkG3n9IIbCZg.png"
              alt="profile"
              className="rounded-full w-24 h-24 object-cover z-10 border border-purple-200"
            />
            <p className="z-20">Johnny Rogers</p>
            <small className="z-20">@jonnyragers</small>
          </div>
        </article>
        <article className="flex flex-col w-56 h-56">
          <h3>Group Animation</h3>
          <div className="group shadow-lg rounded-lg flex flex-col relative gap-4 overflow-hidden transition-all">
            <div className="group-hover:bg-red-300 group-hover:-translate-y-6 h-24 bg-red-200 duration-200"></div>
            <div className="absolute bottom-2 left-2 duration-200">
              <FiAlertOctagon className="group-hover:-translate-y-2 duration-200" />
              <small className="group-hover:block hidden duration-200">
                Lorem ipsum dolor
              </small>
            </div>
            <FiArrowRightCircle className="group-hover:visible group-hover:-translate-x-2 invisible duration-200 absolute right-2 top-2" />
          </div>
        </article>
      </section>
      <section className="flex justify-evenly items-center">
        <Carousel />
      </section>
    </div>
  );
};

export default HomePage;
