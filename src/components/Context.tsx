import { createContext } from "react";

export const sharedState = {
  coverdAreas: [],
};

const Context = createContext(sharedState);

export default Context;
