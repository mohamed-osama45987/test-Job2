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
}

const Aside = ({ imageUrl, crops, setCrops }: AsideProps) => {
  return (
    <aside className="w-1/5 bg-blue-200">
      <Download imageUrl={imageUrl ? imageUrl : null} crops={crops} />
      <ShowAll setCrops={setCrops} />
      <ShowSelectedArea />
      <HideSelectedArea />
    </aside>
  );
};

export default Aside;
