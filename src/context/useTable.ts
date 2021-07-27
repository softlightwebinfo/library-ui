import { createContext, useContext } from "react";

export interface IUseTable {

}

export const ContextTable = createContext<IUseTable>({});

export const useTable = () => useContext(ContextTable);
