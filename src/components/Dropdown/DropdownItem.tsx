import React from "react";
import classNames from "classnames";
import styles from '../../sass/modules/DropdownItem.module.scss';
import {IDropdownItemProps} from "../../props/IDropdownItemProps";

export const DropdownItem = ({className, style, ...props}: IDropdownItemProps) => {
    const cs = classNames(styles.DropdownItem, className);
    return (
        <div className={cs} style={style}>

        </div>
    )
};