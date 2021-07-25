import { createContext, useContext } from "react";

export interface IUseTable {

}

export const ContextTable = createContext<IUseTable>({});

export const useCheckbox = () => useContext(ContextTable);
