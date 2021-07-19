import {createContext, SyntheticEvent, useContext} from "react";
import {TNavAppearance} from "../types/TNavAppearance";

export interface IUseNav {
    navbar?: boolean;
    reversed?: boolean;
    vertical?: boolean;
    appearance?: TNavAppearance,
    activeKey?: any,
    onSelect?: (eventKey: any, event: SyntheticEvent<any>) => void,
}

export const ContextNav = createContext<IUseNav>({})
export const useNav = () => useContext(ContextNav);