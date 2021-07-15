import {IProps} from "../interfaces/IProps";
import {SyntheticEvent} from "react";
import {TSimpleColor} from "../types/TSimpleColor";

export interface ITagProps extends IProps {
    closeable?: boolean;
    onClose?: (event: SyntheticEvent<any>) => void
    color?: TSimpleColor;
}