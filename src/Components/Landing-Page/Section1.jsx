import p1 from "./profile1.png";
import p2 from "./p2.png";
import p3 from "./p3.png";
import p4 from "./p4.png";

function Section1() {
  return (
    <div className="h-screen">
      <div className=" flex flex-col w-full h-[50%] ">
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
          <h1 className="text-2xl  justify-baseline gap-8 ">
            ENGINEERED WITH PRECISION, BUILT FOR <br /> PERFORMANCE,
            <span className="text-outlines-muted gap-1.5">
              AND DESIGNED TO MOVE <br /> EFFORTLESSLY WITH VOU.
            </span>{" "}
          </h1>
          <div className="flex flex-col text-[10px]  justify-end">
            <span>
              <span className="text-accent-orange">#</span> XR-21 1' 5
            </span>
            <span>OPTICAL PERFORMANCE</span>
            <span>FRAME 08</span>
          </div>
        </div>
        <div className="flex flex-row w-full justify-evenly h-[40%] pb-1.5   ">
          <img className="rounded-full h-44 w-45 " src={p1} alt="profile1" />
          <img className="rounded-full h-44 w-130 " src={p2} alt="profile2" />
          <img className="rounded-full h-44 w-45 " src={p3} alt="profile3" />
          <img className="rounded-full h-44 w-130 " src={p4} alt="profile4" />
        </div>
        <div className="flex justify-between py-5 px-18 border border-outlines-muted bg-outlines-muted">
          <span>Built for continuous performance</span>
          <span>RF-OO1</span>
        </div>
      </div>
      <div className="h-[50%] w-full">



      </div>

    </div>
  );
}

export default Section1;
