import {IProps} from "../interfaces";

export interface INavToggleProps extends IProps {
    expand?: boolean;
    onChange?: () => void;
}