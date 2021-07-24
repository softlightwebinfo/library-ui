import { IProps } from "../interfaces";
import { TModalSize } from "../types/TModalSize";

export interface IModalDialogProps extends IProps {
  paddingBody?: boolean;
  size?: TModalSize;
  show?: boolean;
}
