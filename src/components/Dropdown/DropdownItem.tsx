import React from "react";
import classNames from "classnames";
import styles from '../../sass/modules/DropdownItem.module.scss';
import {IDropdownItemProps} from "../../props/IDropdownItemProps";
import {useDropdown} from "../../context/useDropdown";

export const DropdownItem = ({className, style, ...props}: IDropdownItemProps) => {
    const ctx = useDropdown();
    const cs = classNames(styles.DropdownItem, className, {
        [styles.Active]: props.eventKey === ctx.activeKey,
    });
    return (
        <li className={cs} style={style}>
            <div className={styles.Content}>
                {props.children}
            </div>
        </li>
    )
};