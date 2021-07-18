import {IProps} from "./IProps";
import {TNavSimpleAppearance} from "../types";

export interface INavbarProps extends IProps {
    appearance?: TNavSimpleAppearance;
    default?: boolean;
}