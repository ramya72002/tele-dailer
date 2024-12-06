import React, { useState, useEffect } from "react";
import Image from "next/image"; // Import Image from next/image
import { FaCamera } from "react-icons/fa";
import ContextMenu from "./ContextMenu";
import PhotoLibrary from "./PhotoLibrary";
import PhotoPicker from "./PhotoPicker";

function Avatar({ type, image, setImage }) {
  const [hover, setHover] = useState(false);
  const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);
  const [contextMenuCoordinates, setContextMenuCoordinates] = useState({
    x: 0,
    y: 0,
  });
  const [grabPhoto, setGrabPhoto] = useState(false);
  const [showPhotoLibary,setShowPhotoLibary]=useState(false);

  const showContextMenu = (e) => {
    e.preventDefault();
    setIsContextMenuVisible(true);
    setContextMenuCoordinates({ x: e.pageX, y: e.pageY });
  };

  useEffect(() => {
    if (grabPhoto) {
      const data = document.getElementById("photo-picker");
      data.click();
      document.body.onfocus = () => {
        setTimeout(() => {}, 1000);
        setGrabPhoto(false);
      };
    }
  }, [grabPhoto]);

  const contextMenuOptions = [
    { name: "Take Photo", callback: () => {} },
    { name: "Choose From Library", callback: () => {} },
    {
      name: "Upload Photo",
      callback: () => {
        setGrabPhoto(true);
      },
    },
    {
      name: "Remove Photo",
      callback: () => {
        setImage("/default_avatar.png");
      },
    },
  ];

  const photoPickerChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        setImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
    <div className="flex items-center justify-center">
      {type === "sm" && (
        <div className="relative h-10 w-10">
          <Image src={image} alt="avatar" className="rounded-full" fill />
        </div>
      )}
      {type === "lg" && (
        <div className="relative h-14 w-14">
          <Image src={image} alt="avatar" className="rounded-full" fill />
        </div>
      )}
      {type === "xl" && (
        <div
          className="relative cursor-pointer z-0"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div
            className={`z-10 bg-photopicker-overlay-background h-60 w-60 absolute top-0 left-0 flex items-center rounded-full justify-center flex-col text-center gap-2 ${
              hover ? "visible" : "hidden"
            }`}
            onClick={(e) => showContextMenu(e)}
            id="context-opener"
          >
            <FaCamera
              className="text-2xl"
              id="context-opener"
              onClick={(e) => showContextMenu(e)}
            />
            <span onClick={(e) => showContextMenu(e)}  id="context-opener" >
              Change <br /> Profile <br /> Photo
            </span>
          </div>
          <div className="flex items-center justify-center h-60 w-60">
            <Image src={image} alt="avatar" className="rounded-full" fill />
          </div>
        </div>
      )}
      </div>
      {isContextMenuVisible && (
        <ContextMenu
          options={contextMenuOptions}
          coordinates={contextMenuCoordinates}
          contextMenu={isContextMenuVisible}
          setContextMenu={setIsContextMenuVisible}
        />
      )}
      {PhotoLibrary && (
      <PhotoLibrary 
      setImage={setImage}
      hidePhotoLibary={setShowPhotoLibary}
      />
      )}
      {grabPhoto && <PhotoPicker onChange={photoPickerChange} /> }
</> 
 );
}

export default Avatar;
