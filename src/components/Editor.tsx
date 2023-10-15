import { Dispatch, SetStateAction, useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

import { area } from "../types/area";

type Crop = {
  unit: "%" | "px";
  x: number;
  y: number;
  width: number;
  height: number;
};

interface ImageEditorProps {
  imgUrl: string | null;
  crops: never[] | area[];
  setCrops: Dispatch<SetStateAction<area[]>>;
  setSelectedCrop: Dispatch<SetStateAction<area | null>>;
}

const ImageEditor = ({
  imgUrl,
  crops,
  setCrops,
  setSelectedCrop,
}: ImageEditorProps) => {
  const [crop, setCrop] = useState<Crop>();

  return (
    <ReactCrop
      crop={crop}
      onChange={(newCrop) => setCrop(newCrop)}
      onComplete={(newCrop) => {
        if (newCrop.width && newCrop.height) {
          //@ts-expect-error types
          setCrops([...crops, newCrop]);
        }
      }}
    >
      <img src={imgUrl ? imgUrl : ""} alt="Uploaded" className="h-full" />

      {crops.map(function (crop: area, index: number) {
        return (
          <div
            onClick={() => setSelectedCrop(crop)}
            key={index}
            className="absolute bg-black flex justify-center items-center"
            style={{
              top: crop?.y,
              left: crop?.x,
              width: crop?.width,
              height: crop?.height,
            }}
          />
        );
      })}
    </ReactCrop>
  );
};

export default ImageEditor;
