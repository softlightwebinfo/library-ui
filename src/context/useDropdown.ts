import {createContext, useContext} from "react";

export interface IUseDropdown {
    vertical?: boolean;
    activeKey?: string;
}

export const ContextDropdown = createContext<IUseDropdown>({})
export const useDropdown = () => useContext(ContextDropdown);