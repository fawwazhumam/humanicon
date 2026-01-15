import React from "react";
import * as Icon from "humanicon";

export default function IconGrid() {
  // Simulasi data icon agar tidak hardcode array
  const dummyIcons = Array.from({ length: 32 }); 

  return (
    <div className="px-4 md:px-8 lg:px-[120px] py-8 pb-32">
      <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 w-full">
        {dummyIcons.map((_, index) => (
          <div key={index} className="flex flex-col items-center w-full group">
            <div className="bg-white/50 backdrop-blur-md rounded-xl w-full aspect-square border border-gray-300 flex items-center justify-center hover:shadow-lg hover:bg-white/65 transition-all cursor-pointer">
              {/* Nanti ganti ini dengan <Icon.NamaIcon /> */}
              <div className="w-6 h-6 bg-black/10 rounded-full" /> 
            </div>
            <p className="mt-2 text-xs text-gray-500 font-medium truncate w-full text-center">
              icon-name
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}