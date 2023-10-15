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
    <div onClick={() => (selectedCrop ? handleClick(selectedCrop, crops) : "")}>
      HideSelectedArea
    </div>
  );
};

export default ShowArea;
