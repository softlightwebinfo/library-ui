import {IProps} from "../interfaces/IProps";
import {TAppearance} from "../types/ TAppearance";
import {TDropdownTrigger} from "../types/TDropdownTrigger";
import {TDropdownPlacement} from "../types/TDropdownPlacement";

export interface IDropdownProps extends IProps {
    placementMenu?: TDropdownPlacement;
    isItem?: boolean;
    activeKey?: string;
    title: string;
    appearance?: TAppearance;
    trigger?: TDropdownTrigger | TDropdownTrigger[];
}