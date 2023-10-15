import { useState } from "react";

import Upload from "./Upload";
import Aside from "./Aside";
import { area } from "../types/area";

const ImageDisplay = () => {
  // all cropped areas
  const [crops, setCrops] = useState<area[]>([
    {
      unit: "%", // Can be 'px' or '%'
      x: 25,
      y: 25,
      width: 0,
      height: 0,
    },
  ]);

  // handle image upload
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // select certain crop
  const [selectedCrop, setSelectedCrop] = useState<area | null>(null);

  return (
    <section className="border-2 border-red-600 min-h-screen flex">
      <Aside
        imageUrl={image ? image.toString() : null}
        crops={crops}
        setCrops={setCrops}
        selectedCrop={selectedCrop}
      />
      <Upload
        crops={crops}
        setCrops={setCrops}
        handleImageUpload={handleImageUpload}
        imageUrl={image ? image.toString() : null}
        setSelectedCrop={setSelectedCrop}
      />
    </section>
  );
};

export default ImageDisplay;
