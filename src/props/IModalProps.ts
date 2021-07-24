import { IProps } from "../interfaces";
import { TModalSize } from "../types/TModalSize";

export interface IModalProps extends IProps {
  paddingBody?: boolean;
  onHide?: (evt: any) => void;
  show?: boolean;
  size?: TModalSize;
}
