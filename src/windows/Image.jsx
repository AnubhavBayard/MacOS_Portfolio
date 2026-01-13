import React from "react";
import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile.data;

  if (!data) return null;

  const { name, imageUrl } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2 className="text-gray-500">{name}</h2>
      </div>

      <div className="w-full h-full flex items-center justify-center bg-gray-100 p-4">
        <img
          src={imageUrl}
          alt={name}
          className="max-w-full max-h-[80vh] object-contain shadow-lg rounded"
        />
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow;
