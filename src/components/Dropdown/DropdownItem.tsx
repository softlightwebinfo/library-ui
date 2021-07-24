import React from "react";
import classNames from "classnames";
import styles from '../../sass/modules/DropdownItem.module.scss';
import {IDropdownItemProps} from "../../props/IDropdownItemProps";
import {useDropdown} from "../../context/useDropdown";
import {useSidenav} from "../../context";

export const DropdownItem = ({className, style, ...props}: IDropdownItemProps) => {
    const ctx = useDropdown();
    const ctxSidenav = useSidenav();
    const cs = classNames(styles.DropdownItem, className, {
        [styles.Active]: props.eventKey === ctx.activeKey,
        [styles.NavVertical]: ctx.vertical,
        [styles.NavSidebarExpanded]: ctxSidenav.sidenav && !ctxSidenav.expanded,
    });
    return (
        <li className={cs} style={style}>
            <div className={styles.Content} style={props.styleContent}>
                {props.children}
            </div>
        </li>
    )
};
