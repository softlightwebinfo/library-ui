import { ReactNode } from "react";
import { IProps } from "../interfaces/IProps";
import { TAppearance } from "../types/TAppearance";
import { TButtonType } from "../types/TButtonType";
import { TSize } from "../types/TSize";

export interface IButtonProps extends IProps {
  loading?: boolean;
  title?: string;
  onClick?: (evt: any) => void;
  appearance?: TAppearance;
  size?: TSize;
  circle?: boolean;
  block?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  type?: TButtonType;
  form?: string;
}
