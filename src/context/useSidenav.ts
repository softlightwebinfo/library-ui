import {createContext, useContext} from "react";

export interface IUseSidenav {
    expanded?: boolean;
    sidenav?: boolean;
    activeKey?: string;
    defaultOpenKeys?: string[];
}

export const ContextSidenav = createContext<IUseSidenav>({})
export const useSidenav = () => useContext(ContextSidenav);