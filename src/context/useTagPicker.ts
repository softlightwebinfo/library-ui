import {ChangeEvent, createContext, useContext} from "react";

export interface IUseCheckbox {
    checkbox: boolean;
    name?: string;
    onChange?: (checked: boolean, value?: any, e?: ChangeEvent<HTMLInputElement>) => void;
}

export const ContextCheckbox = createContext<IUseCheckbox>({
    checkbox: false,
})

export const useCheckbox = () => useContext(ContextCheckbox);