import {IProps} from "../interfaces/IProps";
import {TTypeBasic} from "../types/TTypeBasic";
import {ReactNode} from "react";

export interface IMessageProps extends IProps {
    description: string | ReactNode;
    title?: string | ReactNode;
    type?: TTypeBasic;
    showIcon?: boolean;
}