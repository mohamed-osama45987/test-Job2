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

  return (
    <button
      className="w-2/3 py-4 rounded-full text-white bg-gray-800 hover:-translate-y-1 transition-transform "
      onClick={handleClick}
    >
      HideSelectedArea
    </button>
  );
};

export default HideArea;
