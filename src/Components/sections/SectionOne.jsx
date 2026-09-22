import Crosshairdivider from "../Crosshairdivider/crosshairdivider";


function SectionOne() {
  return (
    <div className="h-screen w-full ">
      {/* empty div */}
      <div className=" h-[2%] w-full bg-bg-cream"></div>
      {/* crosshair divide line */}
      <Crosshairdivider label="ACTIVE COLLECTION" />
      {/* text divs */}
      <div className="flex justify-between h-[30%] bg-bg-cream p-6 ">
        <h1 className="font-dela text-4xl gap-3 w-[50%] ">
          ENGINEERED WITH PRECISION, BUILT FOR PERFORMANCE,{" "}
          <span className="text-outlines-muted">
            AND DESIGNED TO MOVE EFFORTLESSLY WITH YOU.
          </span>
        </h1>
        <div className="flex flex-col self-end font-mono">
          <span>#XR-21 / 5</span>
          <span>OPTICAL PERFORMANCE</span>
          <span className="text-outlines-muted">FRAME Ø8</span>
        </div>
      </div>
      {/* profiles div */}

      <div className="grid grid-cols-6 grid-rows-2 gap-4 h-[40%] w-full bg-bg-cream p-5">
        <div className="row-span-2 max-h-full overflow-hidden flex items-center justify-center ">
          {" "}
          <img
            className=" h-full aspect-square object-cover rounded-full"
            src="/Images/profile1.png"
            alt=""
          />{" "}
        </div>
        <div className="col-span-2 row-span-2 h-full overflow-hidden flex items-center justify-center">
          {" "}
          <img
            className="h-full w-full object-cover rounded-full"
            src="/Images/p2.png"
            alt=""
          />{" "}
        </div>
        <div className="row-span-2 col-start-4 h-full overflow-hidden flex items-center justify-center">
          {" "}
          <img
            className="h-full aspect-square object-cover rounded-full"
            src="/Images/p3.png"
            alt=""
          />{" "}
        </div>
        <div className="col-span-2 row-span-2 col-start-5 h-full overflow-hidden flex items-center justify-center">
          {" "}
          <img
            className="h-full w-full object-cover rounded-full"
            src="/Images/p4.png"
            alt=""
          />{" "}
        </div>
      </div>
      {/* dividing section */}
      <div className=" h-[5%] w-full bg-[repeating-linear-gradient(45deg,#fbfaf8,#fbfaf8_4px,#e8e6e1_4px,#e8e6e1_5px)] border border-outlines-muted flex flex-row justify-between items-center px-4 font-mono ">
        <span>Built for continuous performance</span>
        <span>Rf-001</span>
      </div>
      {/* last text  div */}
      <div className=" flex flex-row justify-between p-5 bg-bg-cream">
        <h1 className="h-full w-[30%] text-8xl font-mono font-bold  flex items-center ">XR-21</h1>
        <div className="flex flex-col justify-evenly items-end gap-5" >
          <div className="flex gap-5">
            <span className="border border-outlines-muted rounded-full p-2 hover:bg-accent-orange hover:cursor-crosshair hover:border-0">ACTIVE COLLECTION</span>
            <span className="border border-outlines-muted rounded-full p-2 hover:bg-accent-orange hover:cursor-crosshair hover:border-0">ALL-DAY COMFORT</span>
          </div>
          <div className="flex gap-5">
            <span className="border border-outlines-muted rounded-full p-2 hover:bg-accent-orange hover:cursor-crosshair hover:border-0">ADAPTIVE LENS</span>
            <span className="border border-outlines-muted rounded-full p-2 hover:bg-accent-orange hover:cursor-crosshair hover:border-0">ULTRA LIGHTWEIGHT</span>
            <span className="border border-outlines-muted rounded-full p-2 hover:bg-accent-orange hover:cursor-crosshair hover:border-0">LIGHTWEIGHT FRAME</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
