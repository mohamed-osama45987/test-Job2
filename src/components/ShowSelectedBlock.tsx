import { Dispatch, SetStateAction } from "react";
import { area } from "../types/area";

interface ShowAreaProps {
  selectedCrop: area | null;
  setCrops: Dispatch<SetStateAction<area[]>>;
  crops: area[];
}

const ShowArea = ({ setCrops, selectedCrop, crops }: ShowAreaProps) => {
  const handleClick = () => {
    if (!selectedCrop) {
      return;
    }

    setCrops([...crops, selectedCrop]);
  };

  return <div onClick={handleClick}>ShowArea</div>;
};

export default ShowArea;
