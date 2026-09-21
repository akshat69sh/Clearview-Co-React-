import { CirclePlus } from "lucide-react";

function Footer() {
  return (
    <div className="bg-[#231e1d] h-[50vh] text-outlines-muted flex flex-col">
      <div className="flex flex-row justify-between text-center items-center px-8 my-15 border border-outlines-muted  ">
        <h1 className="text-4xl font-dela">
          MOVE WITH CLARITY, SEE WITH CONFIDENCE.
        </h1>
        <span className="p-2.5">
          <CirclePlus size={68} fill="#FF3D00" strokeWidth={0.5} />
        </span>
      </div>
      <div className="p-5 h-[50%] flex justify-between items-center">
        <div className="w-[60%]  ">
          <p className="">
            STAY AHEAD WITH THE LATEST EYEWEAR <br />
            DROPS AND EXCLUSIVE OFFERS.
          </p>
          <div className="border border-outlines-muted w-[40%] flex justify-between p-2.5 ">
            <input className="w-[80%] " type="text" />
            <button className="border border-accent-orange bg-accent-orange w-[20%] p-2 text-2xl hover:cursor-pointer flex justify-center text-center"> &gt; </button>
          </div>
        </div>
        <div className="w-[15%] flex flex-col items-center font-sans">
            <span className="p-2 text-accent-orange" >COLLECTION</span>
            <span className="font-mono">Home</span>
            <span className="font-mono">Collections</span>
            <span className="font-mono">New arrivals</span>
            <span className="font-mono">Best sellers</span>
            <span className="font-mono">About us</span>
        </div>
        <div className="w-[15%] flex flex-col items-center font-sans">
            <span className="p-2 text-accent-orange" >FOLLOW</span>
            <span className="font-mono">Instagram</span>
            <span className="font-mono">Dribbble</span>
            <span className="font-mono">Pinterest</span>
            <span className="font-mono">Facebook</span>
            <span className="font-mono">Tiktok</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
