import Download from "./Download";
import ShowAll from "./ShowAll";
import ShowSelectedArea from "./ShowSelectedBlock";
import HideSelectedArea from "./HideSelectedArea";

const Aside = () => {
  return (
    <aside className="w-1/5 bg-blue-200">
      <Download />
      <ShowAll />
      <ShowSelectedArea />
      <HideSelectedArea />
    </aside>
  );
};

export default Aside;
