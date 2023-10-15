import { ChangeEventHandler, Dispatch, SetStateAction } from "react";

import ImageEditor from "./Editor";
import { area } from "../types/area";

interface ImageUploadProps {
  crops: area[];
  setCrops: Dispatch<SetStateAction<area[]>>;
  handleImageUpload: ChangeEventHandler<HTMLInputElement>;
  imageUrl: string | null;
  setSelectedCrop: Dispatch<SetStateAction<area | null>>;
}

const ImageUpload = ({
  crops,
  setCrops,
  handleImageUpload,
  imageUrl,
  setSelectedCrop,
}: ImageUploadProps) => {
  return (
    <div className="w-4/5 flex justify-center items-center">
      {!imageUrl && (
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      )}
      {imageUrl && (
        <ImageEditor
          imgUrl={imageUrl.toString()}
          crops={crops}
          setCrops={setCrops}
          setSelectedCrop={setSelectedCrop}
        />
      )}
    </div>
  );
};

export default ImageUpload;
