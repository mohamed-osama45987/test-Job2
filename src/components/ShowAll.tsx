import { Dispatch, SetStateAction } from "react";
import { area } from "../types/area";

interface ShowAllProps {
  setCrops: Dispatch<SetStateAction<area[]>>;
}

const ShowAll = ({ setCrops }: ShowAllProps) => {
  return <div onClick={() => setCrops([])}>ShowAll</div>;
};

export default ShowAll;
