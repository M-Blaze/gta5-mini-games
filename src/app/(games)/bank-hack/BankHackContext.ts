import { createContext } from "react";

import { BankHackState } from "./page";

export const BankHackContext = createContext<BankHackState | undefined>(
  undefined
);
