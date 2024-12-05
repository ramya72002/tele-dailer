import React from "react";
import Image from "next/image";  // Import Image from next/image

function Avatar({ type, image, setImage }) {
  return (
    <div className="flex items-center justify-center">
      {type === "sm" && (
        <div className="relative h-10 w-10">
          <Image src={image} alt="avatar" className="rounded-full" />
        </div>
      )}
      {type === "lg" && (
        <div className="relative h-14 w-14"> {/* Adjusted width to match the height */}
          <Image src={image} alt="avatar" className="rounded-full" />
        </div>
      )}
    </div>
  );
}

export default Avatar;
