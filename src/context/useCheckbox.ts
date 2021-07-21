import {ChangeEvent, createContext, useContext} from "react";

export interface IUseRadio {
    radio: boolean;
    name?: string;
    onChange?: (checked: boolean, value?:any, e?: ChangeEvent<HTMLInputElement>) => void;
}

export const ContextRadio = createContext<IUseRadio>({
    radio: false,
})

export const useRadio = () => useContext(ContextRadio);