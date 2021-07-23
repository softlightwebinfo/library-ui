import React from "react";
import classNames from "classnames";
import styles from '../../sass/modules/Dot.module.scss';
import {IDotProps} from "../../props/IDotProps";

export const Dot = ({className, style, ...props}: IDotProps) => {
    const cs = classNames(styles.Dot, className, {
        [styles.Default]: props.default,
        [styles.Active]: props.active,
        [styles.Hover]: props.hover,
        [styles.Vertical]: props.vertical,
        [styles.Bar]: props.bar,
    });
    return (
        <span onClick={props.onClick} className={cs} style={style}/>
    )
};
