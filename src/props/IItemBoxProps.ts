import { IProps } from "../interfaces";
import { TAppearance } from "../types";

export interface IItemBoxProps extends IProps {
  appearance?: TAppearance;
  onClick?: (evt: any) => void;
}
