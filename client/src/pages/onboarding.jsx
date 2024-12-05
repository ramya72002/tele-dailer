import React from "react";
import Image from "next/image";

function Onboarding() {
  return (
    <div className="bg-panel-header-background h-screen w-screen text-white flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-2">
        <Image 
          src="/whatsapp.gif" 
          alt="WhatsApp animation" 
          height={300} 
          width={300} 
        />
        <span className="test-7xl">Whatsapp</span>
      </div>
    </div>
  );
}

export default Onboarding;
