import headImg from "./head.png";
import { Flower, MoveRight } from "lucide-react";

function LandingPage() {
  return (
    <div className="flex justify-between bg-outlines-muted border w-full h-screen pt-12  ">
      <div className="flex justify-between border h-full w-[75%] bg-bg-cream ">
        {/* <img className='w-full h-auto object-cover   origin-center' src={headImg} alt="Head illustration"  /> */}
        <div className="px-8 py-4">
          <div className="flex justify-between flex-col  h-full ">
            <div className="flex flex-row w-full justify-between gap-8 h-[50%] text-2xl ">
              <span>34% Signal-form</span>
              <span>
                <Flower color="#FF3D00" />
              </span>
              <span>48% Lens-sync</span>
              <span>
                <Flower color="#FF3D00" />
              </span>
              <span>Vision-flow</span>
            </div>
            <div className="flex justify-between flex-col h-[50%]">
              <div className="flex flex-col gap-4 h-[50%] ">
                <div className="flex  justify-start p-2 items-center gap-10 font-sans">
                  <span className="border-accent-orange rounded-full border h-4 w-4 bg-accent-orange"></span>
                  <span>LOOKED</span>
                  <span className="border-outlines-muted w-24 color-outlines-muted border"></span>
                  <span className="border-2 rounded-xl w-6 text-center font-medium ">R</span>
                </div>
                <p className="font-sans text-2xl">
                  Discover precision-crafted eyewear where futuristic <br />
                  design. everyday comfort, and bold optical innovation <br />
                  come together for a clearer perspective.
                </p>
              </div>
              <button className="flex justify-between w-[50%] hover:cursor-pointer hover:h-12  hover:w-[55%] bg-(--sub-heading-charcoal) text-white font-sans text-2xl items-center p-1 ">
                Explore New Collection <MoveRight color="white"  />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center border w-[17%]  bg-bg-cream  font-dela">
        EYEWEAR
      </div>
      <div className="flex justify-center w-[3%] border bg-bg-cream  "></div>
    </div>
  );
}

export default LandingPage;
