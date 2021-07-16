import {createContext, useContext} from "react";

export interface IUseDropdown {
    activeKey?: string;
}

export const ContextDropdown = createContext<IUseDropdown>({})
export const useDropdown = () => useContext(ContextDropdown);