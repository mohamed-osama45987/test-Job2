import { Dispatch, SetStateAction } from "react";
import { area } from "../types/area";

interface ShowAreaProps {
  selectedCrop: area | null;
  setCrops: Dispatch<SetStateAction<area[]>>;
  crops: area[];
}

const ShowArea = ({ selectedCrop, setCrops, crops }: ShowAreaProps) => {
  const handleClick = function (selectedCrop: area, crops: area[]) {
    // filter the rest of the crops and remove the selected crop
    const newCropsArray = crops.filter((crop) => crop.x !== selectedCrop.x);

    setCrops(newCropsArray);
  };

  return (
    <button
      onClick={() => (selectedCrop ? handleClick(selectedCrop, crops) : "")}
      className="w-2/3 py-4 bg-purple-600 rounded-full text-white hover:-translate-y-1 transition-transform"
    >
      ShowSelectedArea
    </button>
  );
};

export default ShowArea;
