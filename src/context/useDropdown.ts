import { createContext, useContext } from "react";

export interface IUseDropdown {
  vertical?: boolean;
  activeKey?: string;
  onClick?: (eventKey: string | undefined, evt: any) => void;
}

export const ContextDropdown = createContext<IUseDropdown>({});
export const useDropdown = () => useContext(ContextDropdown);
