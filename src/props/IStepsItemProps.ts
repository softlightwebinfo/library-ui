import {IProps} from "../interfaces/IProps";
import {ReactNode} from "react";

export interface IStepsItemProps extends IProps {
    isBorder?: boolean;
    index?: number;
    finish?: boolean;
    finishNext?: boolean;
    title?: string;
    description?: string;
    icon?: ReactNode;
}