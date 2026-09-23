import React from "react";
import Crosshairdivider from "../Crosshairdivider/crosshairdivider";
function SectionThree() {
  return (
    <div className="bg-[#231e1d] w-full h-fit">
      {/* empty div */}
      <div className="h-32 w-full"></div>
      {/* crosshair */}
      <Crosshairdivider label="CLIENT STORIES" />
      {/* heading */}
      <div className="text-white flex flex-col justify-center items-center font-dela text-5xl py-5 h-fit">
        <h2>WORN BY THOSE WHO</h2>
        <h2>SEE DIFFERENTLY.</h2>
      </div>
      {/* profile */}
      <div className="flex flex-row h-fit w-full items-center p-4 ">
        <div className="h-fit w-[30%] flex flex-row items-center gap-5">
          <span className="border border-accent-orange rounded-full w-5 h-5 p-0 bg-accent-orange "></span>
          <span className="text-accent-orange">MARK WOOD</span>
          <span className="border w-28 h-0 text-white"></span>
          <span className="border rounded-full w-6 flex items-center justify-center text-white">
            C
          </span>
        </div>
        <div className="h-fit w-[40%] flex flex-row ">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
        </div>
        <div className="h-fit w-[30%] flex flex-row items-center gap-5">
          <span className="border border-accent-orange rounded-full w-5 h-5 p-0 bg-accent-orange "></span>
          <span className="text-accent-orange">JACK SMITH</span>
          <span className="border w-28 h-0 text-white"></span>
          <span className="border rounded-full w-6 flex items-center justify-center text-white">
            C
          </span>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
