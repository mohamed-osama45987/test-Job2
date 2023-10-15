import { Dispatch, SetStateAction } from "react";
import { area } from "../types/area";

interface HideAreaProps {
  selectedCrop: area | null;
  setCrops: Dispatch<SetStateAction<area[]>>;
  crops: area[];
}

const HideArea = ({ setCrops, selectedCrop, crops }: HideAreaProps) => {
  const handleClick = () => {
    if (!selectedCrop) {
      return;
    }

    setCrops([...crops, selectedCrop]);
  };

  return <div onClick={handleClick}>HideSelectedArea</div>;
};

export default HideArea;
