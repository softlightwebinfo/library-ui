import { CSSProperties, ReactNode } from "react";
import { IProps } from "../interfaces/IProps";
import { TAppearance } from "../types/TAppearance";
import { TDropdownPlacement } from "../types/TDropdownPlacement";
import { TDropdownTrigger } from "../types/TDropdownTrigger";

export interface IDropdownProps extends IProps {
  initial?: boolean;
  noArrow?: boolean;
  styleMenu?: CSSProperties;
  classNameMenu?: string;
  icon?: ReactNode;
  eventKey?: string;
  placementMenu?: TDropdownPlacement;
  isItem?: boolean;
  isDisabled?: boolean;
  activeKey?: string;
  title?: string | ReactNode;
  appearance?: TAppearance;
  trigger?: TDropdownTrigger | TDropdownTrigger[];
  renderTitle?: (children: ReactNode, props: IDropdownProps) => ReactNode;
  onClick?: (eventKey: string | undefined, evt: any) => void;
}
