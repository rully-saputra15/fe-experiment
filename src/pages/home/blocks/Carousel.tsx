import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { GrFormNextLink } from "react-icons/gr";
import "./carousel.css";

const PADDING = 50;
const Carousell = () => {
  const itemListRef = React.useRef<HTMLDivElement>(null);
  const cardRef = React.useRef<HTMLImageElement>(null);

  const handleNavigate = (type: "BACK" | "NEXT") => {
    let val = itemListRef.current?.scrollLeft;
    if (typeof val !== "undefined" && cardRef.current) {
      if (type === "BACK") {
        val -= cardRef.current.getBoundingClientRect().width + PADDING;
      } else if (type === "NEXT") {
        val += cardRef.current.getBoundingClientRect().width + PADDING;
      }
      console.log(val);
      itemListRef.current?.scrollTo({ left: val, behavior: "smooth" });
    }
  };

  return (
    <div className="flex items-center">
      <IoMdArrowRoundBack
        className="w-10 h-10 cursor-pointer"
        onClick={() => handleNavigate("BACK")}
      />
      <div className="item-list" ref={itemListRef}>
        <img
          src="https://media.istockphoto.com/id/517188688/id/foto/lanskap-gunung.jpg?s=612x612&w=0&k=20&c=vJbqv4UEOXni-tW2RjeubmeZ6y9vsW4vVGKQy2-ZCRk="
          alt="img1"
          className="w-56 h-56 object-cover"
          ref={cardRef}
        />
        <img
          src="https://img.freepik.com/free-photo/beautiful-mountains-landscape_23-2150787888.jpg"
          alt="img2"
          className="w-56 h-56 object-cover"
        />
        <img
          src="https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_640.png"
          alt="img3"
          className="w-56 h-56 object-cover"
        />
        <img
          src="https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg"
          alt="img4"
          className="w-56 h-56 object-cover"
        />
      </div>
      <GrFormNextLink
        className="w-10 h-10 cursor-pointer"
        onClick={() => handleNavigate("NEXT")}
      />
    </div>
  );
};

export default Carousell;
