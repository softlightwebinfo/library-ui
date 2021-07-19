import {createContext, useContext} from "react";

export interface IUseSidebarPage {
    sidebarPage?: boolean;
}

export const ContextSidebarPage = createContext<IUseSidebarPage>({})
export const useSidebarPage = () => useContext(ContextSidebarPage);