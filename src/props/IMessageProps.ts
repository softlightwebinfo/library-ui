import { ReactNode } from "react";
import { IProps } from "../interfaces/IProps";
import { TTypeBasic } from "../types/TTypeBasic";

export interface IMessageProps extends IProps {
  dark?: boolean;
  closable?: boolean;
  hover?: boolean;
  separate?: boolean;
  isAlert?: boolean;
  show?: boolean;
  onClose?: (evt: any) => void;
  description: string | ReactNode;
  title?: string | ReactNode;
  type?: TTypeBasic;
  showIcon?: boolean;
  full?: boolean;
}
