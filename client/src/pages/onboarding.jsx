import React,{useState} from "react";
import Image from "next/image";
import { useStateProvider } from "@/context/StateContext";

function Onboarding() {
  const [{userInfo}]=useStateProvider();
  const [name,setName]=useState(userInfo?.name||"");
  const [about,setAbout]=useState("");
  const [image,setImage]=useState("/default_avatar.png");

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
      <h2 className="text-2xl">Create your profile</h2>
      <div className="flex gap-6 mt-6"></div>
      <div className="flex flex-col items-center justify-center mt-5 gap-6 ">
        <input name="Display Name" state={name} setState={setName} label />
        <input name="About" state={about} setState={setAbout} label />

      </div>
       <div>
        <avatar type="xl" image = {image} setImage= {setImage}/>
       </div>
    </div>
  );
}

export default Onboarding;