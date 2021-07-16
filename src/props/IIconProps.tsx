import {IProps} from "../interfaces/IProps";
import {ReactNode} from "react";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

export interface IIconProps extends IProps {
    icon: ReactNode | IconProp | string | any;
}