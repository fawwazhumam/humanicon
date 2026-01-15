import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <div className="flex gap-[8px] items-center">
      <div className="relative shrink-0 w-[20px] h-[24px]">
        <Image
          src="/assets/logos/H-icon.svg"
          alt="H-Icon"
          fill
          className="object-contain"
        />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0">
        <p className="font-bold text-[18px] md:text-[20px] text-black text-nowrap">
          humanicons
        </p>
      </div>
    </div>
  );
}

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-white/70 backdrop-blur-2xl border-b border-gray-200">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[120px] py-4 md:py-6 flex justify-center">
        <Logo />
      </div>
    </header>
  );
}
