

import { NavLink } from 'react-router-dom';


function FeatureCard({ isImage, imageSrc, tagNum, tagText, isOpposite }) {
  return (
    <>
      <div className="w-full h-full aspect-4/3 overflow-hidden rounded-2xl">
        {isImage ? (
          <img
            className=" w-full h-full object-cover"
            src={imageSrc}
            alt=""
          />
        ) : (
          <div className="w-full h-full bg-gray-300 flex items-center justify-center p-4">
            {tagNum && <span className="text-lg font-bold">{tagNum}</span>}
            {tagText && <p className="text-center">{tagText}</p>}
             <NavLink to="/">Click Me</NavLink>
          </div>
        )}
      </div>
    </>
  );
}

export default FeatureCard;
