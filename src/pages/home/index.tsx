import React from "react";
import "./homePage.css";

const HomePage = () => {
  return (
    <div className="flex justify-evenly items-center">
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
    </div>
  );
};

export default HomePage;
