import {createContext, useContext} from "react";
import {TSize} from "../types";

export interface IUseList {
    bordered?: boolean;
    hover?: boolean;
    size?: TSize;
    list: boolean;
}

export const ContextList = createContext<IUseList>({
    list: false,
})

export const useList = () => useContext(ContextList);