
import Context, { sharedState } from "./Context";

import Aside from "./Aside";
import Upload from "./Upload";

const ImageDisplay = () => {
 

  return (
    <Context.Provider value={sharedState}>
      <section className="border-2 border-red-600 min-h-screen flex">
        <Aside />
        <Upload  />
      </section>
    </Context.Provider>
  );
};

export default ImageDisplay;
