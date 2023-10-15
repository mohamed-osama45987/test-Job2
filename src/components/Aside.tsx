import Download from "./Download";
import ShowAll from "./ShowAll";
import ShowSelectedArea from "./ShowSelectedBlock";
import HideSelectedArea from "./HideSelectedArea";
import { area } from "../types/area";
interface AsideProps {
  imageUrl: string | null;
  crops: [area];
}

const Aside = ({ imageUrl, crops }: AsideProps) => {
  return (
    <aside className="w-1/5 bg-blue-200">
      <Download
        imageUrl={imageUrl ? imageUrl : null}
        crops={crops.length > 0 ? crops : null}
      />
      <ShowAll />
      <ShowSelectedArea />
      <HideSelectedArea />
    </aside>
  );
};

export default Aside;
