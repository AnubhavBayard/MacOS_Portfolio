import React from "react";
import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile.data;

  if (!data) return null;

  const { name, image, subtitle, description } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2 className="text-gray-500">{name}</h2>
      </div>

      <div className="txt-file">
        {image && <img src={image} alt={name} className="w-full h-auto" />}

        <div className="p-5">
          {subtitle && <h3 className="text-2xl font-bold mb-3">{subtitle}</h3>}

          {description &&
            description.map((paragraph, index) => (
              <p key={index} className="mb-2 text-gray-700">
                {paragraph}
              </p>
            ))}
        </div>
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
