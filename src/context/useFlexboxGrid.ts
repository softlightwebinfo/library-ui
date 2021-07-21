import {createContext, useContext} from "react";

export interface IUseFlexboxGrid {
    flexboxGrid: boolean;
    gap?: number;
}

export const ContextFlexboxGrid = createContext<IUseFlexboxGrid>({
    flexboxGrid: false,
})
export const useFlexboxGrid = () => useContext(ContextFlexboxGrid);