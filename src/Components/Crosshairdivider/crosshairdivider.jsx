import React from "react";

function Crosshairdivider({ label }) {
  return (
    <div className="flex flex-row justify-center bg-bg-cream items-center font-sans h-[8%] ">
      <span className="text-accent-orange p-1 items-center text-2xl">+</span>
      <span className="border border-outlines-muted w-2xl h-.5 "></span>
      <span className="text-accent-orange">{label}</span>
      <span className="border border-outlines-muted w-2xl h-.5 "></span>
      <span className="text-accent-orange p-1 items-center text-2xl">+</span>
    </div>
  );
}

export default Crosshairdivider;
