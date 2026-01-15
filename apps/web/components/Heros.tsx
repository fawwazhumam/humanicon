import React from "react";

function TagBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center px-3 py-1 bg-gray-100 rounded-full">
      <p className="font-medium text-gray-500 text-[12px] md:text-[18px] text-nowrap">
        {children}
      </p>
    </div>
  );
}

function CTAButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-white/60 backdrop-blur-xl flex gap-2 items-center px-4 py-3 rounded-full shadow-sm border border-white/70 hover:bg-white/75 transition-all">
       {/* Icon bisa ditaruh sini */}
      <span className="font-medium text-sm md:text-base text-black">
        {children}
      </span>
    </button>
  );
}

export default function Hero() {
  return (
    <div className="flex flex-col items-center px-4 md:px-8 lg:px-[120px] pt-[120px] pb-8">
      {/* Tags */}
      <div className="flex flex-wrap gap-3 justify-center mb-6 text-gray-400">
        <p>100 Icons</p>
        <p>React & Vue libraries</p>
      </div>

      {/* Title */}
      <div className="text-center max-w-4xl mb-10">
        <h1 className="font-bold text-3xl md:text-5xl text-black leading-tight">
          Beautiful hand-crafted SVG icons,<br />
          <h1 className="p-6 text-3xl md:text-5xl text-blue-500 leading-tight">by human artist</h1>
        </h1>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mb-12">
        <CTAButton>Documentation</CTAButton>
        <CTAButton>Get Figma File</CTAButton>
      </div>
    </div>
  );
}