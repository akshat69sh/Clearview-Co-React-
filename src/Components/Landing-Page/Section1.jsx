import p1 from "./profile1.png";
import p2 from "./p2.png";
import p3 from "./p3.png";
import p4 from "./p4.png";
import Specs from "./spec.jpg";
import Specs2 from "./spec2.jpg";

import { MoveRightIcon } from "lucide-react";

function Section1() {
  return (
    <div className="h-screen ">
      <div className=" flex flex-col w-full h-[70%] bg-bg-cream ">
        <div className="flex flex-row justify-center items-center font-sans h-[10%] ">
          <span className="text-accent-orange p-1 items-center text-2xl">
            +
          </span>
          <span className="border border-outlines-muted w-2xl h-.5 "></span>
          <span className="text-accent-orange">ACTIVE COLLECTION</span>
          <span className="border border-outlines-muted w-2xl h-.5 "></span>
          <span className="text-accent-orange p-1 items-center text-2xl">
            +
          </span>
        </div>
        <div className="flex flex-row justify-between px-7 py-2 h-[50%]">
          <h1 className="text-5xl font-dela   ">
            ENGINEERED WITH PRECISION, BUILT FOR <br /> PERFORMANCE,
            <span className="text-outlines-muted gap-1.5">
              AND DESIGNED TO MOVE <br /> EFFORTLESSLY WITH VOU.
            </span>{" "}
          </h1>
          <div className="flex flex-col text-[15px]  font-mono  justify-end">
            <span className=" flex items-center ">
              <span className="text-accent-orange text-[25px]">#</span> XR-21 1'
              5
            </span>
            <span className="py-2.5">OPTICAL PERFORMANCE</span>
            <span className="py-2.5">FRAME 08</span>
          </div>
        </div>
        <div className="flex flex-row w-full justify-evenly items-center h-[40%]    ">
          <img className="rounded-full h-55 w-55 " src={p1} alt="profile1" />
          <img className="rounded-full h-55 w-130 " src={p2} alt="profile2" />
          <img className="rounded-full h-55 w-55 " src={p3} alt="profile3" />
          <img className="rounded-full h-55 w-130 " src={p4} alt="profile4" />
        </div>
        <div className="flex justify-between py-5 px-18 border  bg-outlines-muted">
          <span>Built for continuous performance</span>
          <span>RF-OO1</span>
        </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-1 gap-4 h-[30%]">
        <div className="flex justify-between flex-col p-5">
          <h2 className="text-5xl font-dela">
            FIND YOUR FRAME <br />
            FOR WHAT'S NEXT
          </h2>
          <button className="flex flex-row gap-2.5 font-sans items-center justify-between w-[40%]">
            <span>Explore New Colection </span>
            <MoveRightIcon />
          </button>
        </div>
        <div className="flex ">
          <div className="flex flex-col justify-between w-[30%] h-full py-7 bg-accent-orange ">
            <div className="flex flex-col gap-3 font-mono p-1.5 text-center">
              <span className="border border-text-dark rounded-2xl w-full">
                ACTIVE COLLECTION
              </span>
              <span className="border border-text-dark rounded-2xl w-full">
                {" "}
                ALL-DAY COMFORT
              </span>
            </div>
            <div>
              <h2 className="flex justify-center text-4xl font-dela text-center py-10">
                XR - 21
              </h2>
            </div>
          </div>
          <div className="flex justify-center w-[70%]  ">
            <img
              src={Specs}
              alt=""
              className="h-full rounded-4xl px-2 py-2 mx-5 items-center  "
            />
            <div className="flex flex-col justify-between items-center text-center px-3 py-3">
              <div className="flex flex-col">
                <span className="border border-outlines-muted rounded-2xl w-full p-1 font-mono text-outlines-muted ">
                  ULTRA LIGHTWEIGHT
                </span>
                <span className="border border-outlines-muted text-outlines-muted rounded-2xl w-full font-mono p-1 ">
                  {" "}
                  ADAPTIVE LENS
                </span>
              </div>
              <p className="font-sans text-accent-orange">
                PRECISION OPTICS MEET PROGRESSIVE DESIGN FOR EVERYDAY VISION AND
                MOMENT
              </p>
            </div>
          </div>
        </div>
        <div className="bg-outlines-muted" ></div>
      </div>
    </div>
  );
}

export default Section1;
