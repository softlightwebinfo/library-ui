import { ReactNode } from "react";
import { IProps } from "../interfaces";

export interface IMessageAlertProps extends IProps {
  onClick?: (evt: any) => void;
  success?: boolean;
  icon: ReactNode;
  label: ReactNode;
  button: ReactNode;
}
