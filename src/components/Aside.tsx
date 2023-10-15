import { Dispatch, SetStateAction } from "react";

import { area } from "../types/area";

import Download from "./Download";
import ShowAll from "./ShowAll";
import ShowSelectedArea from "./ShowSelectedBlock";
import HideSelectedArea from "./HideSelectedArea";
interface AsideProps {
  imageUrl: string | null;
  crops: area[];
  setCrops: Dispatch<SetStateAction<area[]>>;
  selectedCrop: area | null;
}

const Aside = ({ imageUrl, crops, setCrops, selectedCrop }: AsideProps) => {
  return (
    <aside className="w-1/5 bg-white flex flex-col justify-between py-32">
      <div className="flex justify-center items-center w-full">
        <ShowSelectedArea
          setCrops={setCrops}
          selectedCrop={selectedCrop}
          crops={crops}
        />
      </div>

      <div className=" w-full flex flex-col gap-4 justify-center items-center">
        <HideSelectedArea
          selectedCrop={selectedCrop}
          setCrops={setCrops}
          crops={crops}
        />
        <Download imageUrl={imageUrl ? imageUrl : null} crops={crops} />
        <ShowAll setCrops={setCrops} />
      </div>
    </aside>
  );
};

export default Aside;
