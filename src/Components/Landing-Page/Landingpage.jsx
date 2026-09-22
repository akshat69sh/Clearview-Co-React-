import { Flower } from "lucide-react";
import Explorebutton from "./explorebutton";

function Landingpage() {
  return (
    <div className="w-full h-screen">
      <div className=" h-[5%] border border-outlines-muted bg-[repeating-linear-gradient(45deg,#fbfaf8,#fbfaf8_4px,#e8e6e1_4px,#e8e6e1_5px)]"></div>
      <div className=" w-full h-[95%] flex justify-between bg-[repeating-linear-gradient(45deg,#fbfaf8,#fbfaf8_4px,#e8e6e1_4px,#e8e6e1_5px)] ">
        {/* left div  */}
        <div className="relative top-0 w-[83%] h-full  ">
          <img
            src="/Images/head.png"
            alt="heroimg"
            className="w-full h-full object-fill border border-outlines-muted "
          />
          {/* text div's of hero img */}
          <div className="absolute top-0 p-6 left-0 w-full h-full font-mono">
            <div className="flex h-[60%] justify-between flex-col">
              <div className="flex font-mono items-center gap-10">
                <span>Signal-form</span>
                <span>
                  <Flower color="#FF3D00" />
                </span>
                <span>48% lens-sync</span>
                <span>
                  <Flower color="#FF3D00" />
                </span>
                <span>72% Vision-flow</span>
              </div>
              <div className="flex justify-evenly w-[15%] items-center  text-white">
                <span className="border border-accent-orange rounded-full w-5 h-5 p-0 bg-accent-orange "></span>
                <span>Looked</span>
                <span className="border w-18 h-0"></span>
                <span className="border rounded-full w-6 flex items-center justify-center">
                  R
                </span>
              </div>
            </div>
            <div className="flex text-white flex-col justify-between h-[40%] py-8">
              <p>
                Discover precision-crafted eyewear where futuristic <br />
                design. everyday comfort. and bold optical innovation <br />
                corne together for a clearer perspective.
              </p>
              <Explorebutton />
            </div>
          </div>
        </div>
        {/* mid div */}
        <div className="w-[10%] h-full  border border-outlines-muted bg-bg-cream">
          <span className="[writing-mode:vertical-rl] h-fit  font-dela text-[8rem] flex items-center justify-center  font-black tracking-widest uppercase">
            EYEWEAR
          </span>
        </div>
        {/* right div */}
        <div className="w-[2%] h-full border border-outlines-muted bg-bg-cream"></div>
      </div>
    </div>
  );
}

export default Landingpage;
