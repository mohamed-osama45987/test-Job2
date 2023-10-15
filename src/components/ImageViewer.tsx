import { useState } from "react";

import Upload from "./Upload";
import { area } from "../types/area";

const ImageDisplay = () => {
  const [crops, setCrops] = useState<area[]>([
    {
      unit: "%", // Can be 'px' or '%'
      x: 25,
      y: 25,
      width: 0,
      height: 0,
    },
  ]);
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

  return (
    <section className="border-2 border-red-600 min-h-screen flex">
      {/* <Aside
        imageUrl={image ? image.toString() : null}
        //@ts-expect-error types
        crops={crops}
      /> */}
      <Upload
        crops={crops}
        setCrops={setCrops}
        handleImageUpload={handleImageUpload}
        imageUrl={image ? image.toString() : null}
      />
    </section>
  );
};

export default ImageDisplay;
