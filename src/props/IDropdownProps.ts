import { IProps } from "../interfaces/IProps";
import { TAppearance } from "../types/TAppearance";
import { TDropdownTrigger } from "../types/TDropdownTrigger";
import { TDropdownPlacement } from "../types/TDropdownPlacement";
import { CSSProperties, ReactNode } from "react";

export interface IDropdownProps extends IProps {
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
}
