import {createContext, useContext} from "react";

export interface IUseModal {
    onHide?: (evt: any) => void;
}

export const ContextModal = createContext<IUseModal>({})
export const useModal = () => useContext(ContextModal);