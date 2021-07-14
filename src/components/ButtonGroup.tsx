import React from "react";
import classNames from "classnames";
import {IButtonGroupProps} from "../props/IButtonGroupProps";
import styles from "../sass/modules/ButtonGroup.module.scss";

export const ButtonGroup = (props: IButtonGroupProps) => {
    const classes = classNames(styles.ButtonGroup, props.className);
    return (
        <div className={classes} style={props.style}>
            {props.children}
        </div>
    );
}