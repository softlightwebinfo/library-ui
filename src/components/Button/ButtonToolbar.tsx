import React from "react";
import styles from '../../sass/modules/ButtonToolbar.module.scss';
import classNames from "classnames";
import {IButtonToolbarProps} from "../../props/IButtonToolbarProps";

export const ButtonToolbar = ({children, ...props}: IButtonToolbarProps) => {
    const classes = classNames(styles.ButtonToolbar, props.className)
    return (
        <div className={classes} style={props.style}>
            {children}
        </div>
    );
};