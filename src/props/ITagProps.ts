import { SyntheticEvent } from "react";
import { IProps } from "../interfaces/IProps";
import { TAppearance } from "../types";
import { TSimpleColor } from "../types/TSimpleColor";

export interface ITagProps extends IProps {
  appearance?: TAppearance;
  closeable?: boolean;
  onClose?: (event: SyntheticEvent<any>) => void
  color?: TSimpleColor;
}
