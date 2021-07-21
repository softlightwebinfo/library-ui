import {createContext, useContext} from "react";
import {TPlacement} from "../types";

export interface IUseDrawer {
    onHide?: () => void;
    drawer: boolean;
    placement?: TPlacement;
}

export const ContextDrawer = createContext<IUseDrawer>({
    drawer: false,
})

export const useDrawer = () => useContext(ContextDrawer);