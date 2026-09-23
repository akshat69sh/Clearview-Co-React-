import Crosshairdivider from "../Crosshairdivider/crosshairdivider";

import FeatureCard from "../ui/card/FeatureCard.jsx";

function SectionTwo() {
  const featureCollection = [
    {
      key: 1,
      isImage: true,
      imageSrc: "/Images/sectiontwo1.jpg",
      tagNum: null,
      tagText: null,
      isOpposite: false,
    },
    {
      key: 2,
      isImage: false,
      imageSrc: null,
      tagNum: "#PR-2201",
      tagText:
        "ENGINEERED FOR CLARITY, DESIGNED FOR MOTION, BUILT FOR WHAT'S NEXT.",
      isOpposite: false,
    },
    {
      key: 3,
      isImage: true,
      imageSrc: "/Images/sectiontwo2.jpg",
      tagNum: null,
      tagText: null,
      isOpposite: false,
    },
    {
      key: 4,
      isImage: true,
      imageSrc: "/Images/sectiontwo3.jpg",
      tagNum: null,
      tagText: null,
      isOpposite: false,
    },
    {
      key: 5,
      isImage: true,
      imageSrc: "/Images/sectiontwo4.jpg",
      tagNum: null,
      tagText: null,
      isOpposite: false,
    },
    {
      key: 6,
      isImage: true,
      imageSrc: "/Images/sectiontwo5.jpg",
      tagNum: null,
      tagText: null,
      isOpposite: false,
    },
    {
      key: 7,
      isImage: true,
      imageSrc: "/Images/sectiontwo6.jpg",
      tagNum: null,
      tagText: null,
      isOpposite: false,
    },
    {
      key: 8,
      isImage: false,
      imageSrc: null,
      tagNum: "#DR-3201",
      tagText:
        "ENGINEERED FOR CLARITY, DESIGNED FOR MOTION, BUILT FOR WHAT'S NEXT.",
      isOpposite: true,
    },
  ];

  return (
    <div className="h-screen w-full flex flex-col bg-bg-cream">
      {/* empty div */}
      <div className=" h-[2%] w-full bg-bg-cream"></div>
      {/* crosshair divider */}
      <Crosshairdivider label="FEATURE COLLECTION " />
      {/* heading div */}
      <div className="flex flex-col justify-center items-center text-6xl font-dela w-full h-[20%] ">
        <h2>MEET THE COLLECTION</h2>
        <h2>BUILT TO PERFORM</h2>
      </div>
      {/* collection div */}

      <div className="grid grid-cols-4 grid-rows-2 gap-6 mx-10 my-5  h-[55%] ">
        {featureCollection.map((cardInfo) => (
          <FeatureCard key={cardInfo.key} {...cardInfo} />
        ))}
      </div>  

      {/* <div className="grid grid-cols-4 grid-rows-2 gap-6 mx-10 my-5  h-[55%] ">
        <div className="w-full h-full aspect-4/3 overflow-hidden rounded-2xl">
            <img className=" w-full h-full object-cover" src="/Images/sectiontwo1.jpg" alt="" />
        </div>

        
        <div className="w-full h-full aspect-4/3 overflow-hidden rounded-2xl">2</div>
        
        
        <div className="w-full h-full aspect-4/3 overflow-hidden rounded-2xl">
            <img className=" w-full h-full object-cover" src="/Images/sectiontwo2.jpg" alt="" />
        </div>
        <div className="w-full h-full aspect-4/3 overflow-hidden rounded-2xl">
            <img className=" w-full h-full object-cover" src="/Images/sectiontwo3.jpg" alt="" />
        </div>
        <div className="w-full h-full aspect-4/3 overflow-hidden rounded-2xl">
            <img className=" w-full h-full object-cover" src="/Images/sectiontwo4.jpg" alt="" />
        </div>
        <div className="w-full h-full aspect-4/3 overflow-hidden rounded-2xl">
            <img className=" w-full h-full object-cover" src="/Images/sectiontwo5.jpg" alt="" />
        </div>
        <div className="w-full h-full aspect-4/3 overflow-hidden rounded-2xl">
            <img className=" w-full h-full object-cover" src="/Images/sectiontwo6.jpg" alt="" />
        </div>
        <div className="w-full h-full aspect-4/3 overflow-hidden rounded-2xl">8</div>
      </div> */}
      {/* Shop now div */}
      <div className="w-full h-[10%] bg-accent-orange"></div>
    </div>
  );
}

export default SectionTwo;
