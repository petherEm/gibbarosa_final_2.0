import { Facebook, Instagram } from "lucide-react";
import React from "react";

const TopBanner = () => {
  return (
    <div className="hidden md:inline-block w-full bg-rose-500">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl h-8">
        <div className="flex space-x-8">
          <Facebook size={16} />
          <Instagram size={16} />
        </div>
        <div>
          <h1 className="underline">WERSJA PRZELEWY24</h1>
        </div>
        <div className="flex space-x-4">
          <p>English</p>
          <p>USD</p>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
