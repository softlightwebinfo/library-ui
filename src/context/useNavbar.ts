import {createContext, useContext} from "react";

export interface IUseNavbar {
    navbar?: boolean;
}

export const ContextNavbar = createContext<IUseNavbar>({})
export const useNavbar = () => useContext(ContextNavbar);