import {IProps} from "../interfaces";
import {TModalSize} from "../types/TModalSize";

export interface IModalDialogProps extends IProps {
    size?: TModalSize;
    show?: boolean;
}