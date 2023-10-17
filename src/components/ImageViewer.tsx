import { useState } from "react";

import Upload from "./Upload";
import Aside from "./Aside";
import { area } from "../types/area";
import Steganography from"ts-steganography"

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
      reader.onloadend = async () => {
      

       const EncryptedData = await Steganography.decode(reader.result as string).then(data=> data.length ===0 ?null :JSON.parse(data))

       // if there is an encrypted token use it 
       if(EncryptedData !== null){
        setImage(EncryptedData.orginalImage)
        setCrops(EncryptedData.crops)
        return
       }
       

        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // select certain crop
  const [selectedCrop, setSelectedCrop] = useState<area | null>(null);

  return (
    <section className="min-h-screen flex bg-gray-800">
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
