import {IProps} from "../interfaces/IProps";
import {TDropdownPlacement} from "../types/TDropdownPlacement";

export interface IDropdownMenuProps extends IProps {
    title?: string;
    placement?: TDropdownPlacement;
    isMenu?: boolean;
}