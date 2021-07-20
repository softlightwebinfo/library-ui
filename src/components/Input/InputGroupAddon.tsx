import {IInputGroupAddonProps} from "../../props/IInputGroupAddonProps";
import classNames from "classnames";
import React from "react";
import styles from '../../sass/modules/IInputGroupAddon.module.scss';

export const InputGroupAddon = (props: IInputGroupAddonProps) => {
    const cs = classNames(styles.InputGroupAddon, props.className);
    return (
        <span className={cs} style={props.style}>
            {props.children}
        </span>
    )
};