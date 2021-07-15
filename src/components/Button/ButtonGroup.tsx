import React from "react";
import classNames from "classnames";
import {IButtonGroupProps} from "../../props/IButtonGroupProps";
import styles from "../../sass/modules/ButtonGroup.module.scss";

export const ButtonGroup = ({vertical = false, ...props}: IButtonGroupProps) => {
    const classes = classNames(styles.ButtonGroup, props.className, {
        [styles["ButtonGroup--vertical"]]: vertical,
    });
    return (
        <div className={classes} style={props.style}>
            {props.children}
        </div>
    );
}