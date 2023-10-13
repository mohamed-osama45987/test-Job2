import { useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

type Crop = {
  unit: "%" | "px";
  x: number;
  y: number;
  width: number;
  height: number;
};

interface ImageEditorProps {
  imgUrl: string;
}

const ImageEditor = ({ imgUrl }: ImageEditorProps) => {
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<Crop | null>(null);

  return (
    <ReactCrop
      crop={crop}
      onChange={(newCrop) => setCrop(newCrop)}
      onComplete={(newCrop) => {
        if (newCrop.width && newCrop.height) {
          setCompletedCrop(newCrop);
        }

        console.log(completedCrop);
      }}
    >
      <img src={imgUrl} alt="Uploaded" className="h-full" />
    </ReactCrop>
  );
};

export default ImageEditor;
