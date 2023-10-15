import { Dispatch, SetStateAction } from "react";
import { area } from "../types/area";

interface ShowAllProps {
  setCrops: Dispatch<SetStateAction<area[]>>;
}

const ShowAll = ({ setCrops }: ShowAllProps) => {
  return (
    <button
      className="w-2/3 py-4 rounded-full text-black border border-neutral-900 hover:-translate-y-1 transition-transform "
      onClick={() => setCrops([])}
    >
      ShowAll
    </button>
  );
};

export default ShowAll;
