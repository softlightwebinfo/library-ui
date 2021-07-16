import {IProps} from "../interfaces/IProps";
import {TStepsItemStatus} from "../types/ TStepsItemStatus";

export interface IStepsProps extends IProps {
    currentStatus?: TStepsItemStatus;
    current?: number;
    vertical?: boolean;
}