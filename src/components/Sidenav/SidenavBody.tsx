import React from "react";
import classNames from "classnames";
import {ISidenavBodyProps} from "../../props/ISidenavBodyProps";
import styles from '../../sass/modules/SidenavBody.module.scss';

export const SidenavBody = ({style, className, ...props}: ISidenavBodyProps) => {
    const cs = classNames(styles.SidenavBody, className, {});
    return (
        <div className={cs} style={style}>
            {props.children}
        </div>
    );
};