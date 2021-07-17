import {IProps} from "../interfaces";
import {TLineStatus} from "../types/TLineStatus";

export interface ILineProps extends IProps {
    percent: number;
    status?: TLineStatus;
    showInfo?: boolean;
    strokeColor?: string;
}