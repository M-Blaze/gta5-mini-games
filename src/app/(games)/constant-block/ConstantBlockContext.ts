import { createContext } from "react";

import { ConstantBlockState } from "./page";

export const ConstantBlockContext = createContext<
  ConstantBlockState | undefined
>(undefined);
