import React from "react";
import classNames from "classnames";
import styles from '../../sass/modules/SidenavHeader.module.scss';
import {ISidenavHeaderProps} from "../../props/ISidenavHeaderProps";

export const SidenavHeader = ({className, style, ...props}: ISidenavHeaderProps) => {
    const cs = classNames(styles.SidenavHeader, className);
    return (
        <div className={cs} style={style}>
            {props.children}
        </div>
    )
};